import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";

interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

type WindowSelector = {
  [K in keyof RootState]: RootState[K] extends WindowState ? K : never;
}[keyof RootState];

const styles = {
  container: "w-full md:w-1/2 flex justify-center md:justify-end ",
  visualContainer: `relative w-full h-72 md:h-96 lg:h-[28rem] flex items-center justify-center `,
  codeContainer: `md:min-w-xl md:w-full font-(family-name:--font-geist-mono) relative w-full max-w-lg bg-gray-200/50 dark:bg-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 `,
  codeHeader: `flex items-center p-3 md:p-6 w-full`,
  codeDot: `w-3 h-3 rounded-full mr-2 cursor-pointer`,
  codeBlock: `bg-gray-300/50 dark:bg-gray-900/50 p-3 md:p-6 font-mono text-xs md:text-sm text-gray-800 dark:text-gray-300`,
  codeLine: `block mb-2`,
  codeHighlight: `text-blue-600 dark:text-blue-400`,
};

interface BashWindowProps {
  title: string;
  selector?: WindowSelector;
  onClose: () => void;
  onMinimized: () => void;
  onHidden: () => void;
  children: (isMinimized: boolean, styles: any) => React.ReactNode;
  containerClass?: string;
  visualContainerClass?: string;
  codeContainerClass?: string;
  codeBlockClass?: string;
  isOpenProp?: boolean;
  isMinimizedProp?: boolean;
  isHiddenProp?: boolean;
  actions?: {
    label: string;
    href?: string;
  }[];
}

export default function BashWindow({
  onClose,
  onHidden,
  onMinimized,
  title,
  children,
  selector,
  containerClass,
  isOpenProp,
  isMinimizedProp,
  isHiddenProp,
  visualContainerClass,
  codeContainerClass,
  codeBlockClass,
  actions = [],
}: BashWindowProps) {
  const windowState = useAppSelector((state) =>
    selector != null ? (state[selector] as WindowState) : null,
  );
  const isOpen = windowState?.isOpen ?? false;
  const isMinimized = windowState?.isMinimized ?? false;
  const isHidden = windowState?.isHidden ?? false;

  return isOpen || isOpenProp ? (
    <div className={styles.container + containerClass}>
      <div className={styles.visualContainer + " " + visualContainerClass}>
        <div className={styles.codeContainer + " " + codeContainerClass}>
          <div className={styles.codeHeader}>
            <button
              className={`${styles.codeDot} bg-red-500`}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            ></button>
            <button
              className={`${styles.codeDot} bg-yellow-500`}
              onClick={(e) => {
                e.stopPropagation();
                onMinimized();
              }}
            ></button>
            <span
              className={`${styles.codeDot} bg-green-500`}
              onClick={(e) => {
                e.stopPropagation();
                onHidden();
              }}
            ></span>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              {title}
            </span>

            <div className="hidden md:flex ml-auto gap-5">
              {actions
                .filter((action) => action.href)
                .map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    target="_blank"
                    className="te"
                  >
                    {action.label}
                  </a>
                ))}
            </div>
          </div>

          {actions.filter((action) => action.href).length > 0 && (
            <div className="flex md:hidden gap-5 p-4">
              {actions
                .filter((action) => action.href)
                .map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    target="_blank"
                    className="te"
                  >
                    {action.label}
                  </a>
                ))}
            </div>
          )}

          {!(isHidden || isHiddenProp) && (
            <div className={styles.codeBlock + " " + codeBlockClass}>
              {children(isMinimized || !!isMinimizedProp, styles)}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
