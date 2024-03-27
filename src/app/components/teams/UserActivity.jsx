import { TeamsContext } from "@/app/contexts/TeamsContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function UserActivity() {
  const { dates } = useContext(TeamsContext);

  const ActityItem = ({ date }) => {
    const observerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (target === observerRef.current) {
              setVisible(isIntersecting);
            }
          });
        },
        {
          threshold: 0.4,
        }
      );

      if (observerRef.current) {
        observer.observe(observerRef.current);
      }

      return () => {
        if (observerRef.current) {
          observer.unobserve(observerRef.current);
        }
      };
    }, []);

    return (
      <div
        className={`flex m-1 justify-start items-center w-full h-12 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        key={date}
        ref={observerRef}
      >
        <div className="flex w-1/3 m-1">{date}</div>
        <div className="flex w-1/3 m-1">Activity done</div>
      </div>
    );
  };

  const renderActivities = () => {
    return dates.map((date) => <ActityItem date={date} key={date} />);
  };

  return (
    <div className="flex flex-col w-11/12 m-1">
      {dates && renderActivities()}
    </div>
  );
}
