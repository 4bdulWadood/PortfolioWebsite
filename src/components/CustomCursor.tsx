import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <style>
        {`
          * { cursor: none !important; }
        `}
      </style>
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] transition-all duration-200 ${isPointer ? "w-2 h-2" : "w-2 h-2"}`}
        />
      </div>
      {/* Ring */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.15s ease-out",
        }}
      >
        <div
          className={`rounded-full bg-white/10 transition-all duration-200 ${isClicked ? "w-20 h-20" : isPointer ? "w-16 h-16" : "w-12 h-12"}`}
        />
      </div>
    </>
  );
}
