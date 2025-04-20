'use client';

import { Position, DefaultPosition } from "@/Interfaces/Positions";
import React, { useEffect, useState } from "react";

const CustomFollower = ({
  cursor = "/react-icon.svg",
  parentElementId
}: {
  cursor: string,
  parentElementId?: string,
}) => {
  const [cursorPosition, setCursorPosition] = useState<Position>(DefaultPosition)

  useEffect(() => {
    const cursorFollow = async (e: any) => {
      let clientPosition: Position = DefaultPosition;

      if (parentElementId) {
        const parentElement = document.getElementById(parentElementId);
        if (parentElement) {
          clientPosition.y = parentElement.offsetTop;
          clientPosition.y = parentElement.offsetTop;
        }
      }

      const x = e.pageX - clientPosition.x;
      const y = e.pageY - clientPosition.y;
      setCursorPosition({ x, y });
    }

    window.addEventListener('mousemove', cursorFollow);
    return () => {
      window.removeEventListener('mousemove', cursorFollow);
    };
  }, []);

  return <img 
    src={cursor}
    alt="" 
    className="w-10 h-10 absolute z-0 animate-spin" 
    style={{ top: cursorPosition.y + 25, left: cursorPosition.x + 25, animationDuration: '9s' }} 
  />
}

export default CustomFollower;