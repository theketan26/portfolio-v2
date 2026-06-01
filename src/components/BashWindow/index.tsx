import { useAppSelector } from "@/store/hooks";

const styles = {
  container: "w-full md:w-1/2 flex justify-center md:justify-end ",
  visualContainer: `relative w-full h-72 md:h-96 lg:h-[28rem] flex items-center justify-center `,
  codeContainer: `min-w-xl md:w-full font-(family-name:--font-geist-mono) relative w-full max-w-lg bg-gray-200/50 dark:bg-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 `,
  codeHeader: `flex items-center p-6`,
  codeDot: `w-3 h-3 rounded-full mr-2 cursor-pointer`,
  codeBlock: `bg-gray-300/50 dark:bg-gray-900/50  p-6 font-mono text-sm text-gray-800 dark:text-gray-300`,
  codeLine: `block mb-2`,
  codeHighlight: `text-blue-600 dark:text-blue-400`,
};

interface BashWindowProps {
  title: string;
  selector: string;
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
}: BashWindowProps) {
  const { isOpen, isMinimized, isHidden } = useAppSelector(
    (state) => state[selector],
  );

  return isOpen || isOpenProp ? (
    <div className={styles.container + containerClass}>
      <div className={styles.visualContainer + " " + visualContainerClass}>
        <div className={styles.codeContainer + " " + codeContainerClass}>
          <div className={styles.codeHeader}>
            <button
              className={`${styles.codeDot} bg-red-500`}
              onClick={onClose}
            ></button>
            <button
              className={`${styles.codeDot} bg-yellow-500`}
              onClick={onMinimized}
            ></button>
            <span
              className={`${styles.codeDot} bg-green-500`}
              onClick={onHidden}
            ></span>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              {title}
            </span>
          </div>

          {!(isHidden || isHiddenProp) && (
            <div className={styles.codeBlock + " " + codeBlockClass}>
              {children(isMinimized || isMinimizedProp, styles)}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
