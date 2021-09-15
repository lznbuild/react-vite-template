/* eslint-disable react-hooks/exhaustive-deps */
import cn from 'classnames';
import { useEffect, useState } from 'react';

import styles from './index.module.less';

export interface ExampleProps {
  className?: string;
  title?: string;
}

export function Example({ className, title = 'Example' }: ExampleProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('render');
      
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  
  return (
    <div className={cn(styles.container, className)}>
      <button type="button" onClick={()=> setCount(count+1)}>set num</button>
      {count}
    </div>
  );
}
