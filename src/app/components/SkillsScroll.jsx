import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const SkillsScroll = ({ skills }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, [skills]);

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden py-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={`${skill.id}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0 flex items-center justify-center w-24 h-24 "
          >
            <div className="text-center">
              {skill.icon?.includes('/') ? (
                <img src={skill.icon} className="w-10 h-10 mx-auto mb-1" />
              ) : (
                <div className="text-4xl mb-1">{skill.icon}</div>
              )}

              <p className="text-xs font-medium">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
