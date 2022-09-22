import { useState, useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent) {
  const Component = (props) => {
    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutdside = (e) => {
        if (!ref.current.contains(e.target)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutdside);
    });
    return (
      <WrappedComponent open={open} setOpen={setOpen} ref={ref} {...props} />
    );
  };
  return Component;
}
