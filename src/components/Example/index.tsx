import cn from 'classnames';

import styles from './index.module.less';

export interface ExampleProps {
  className?: string;
  title?: string;
}

export function Example({ className, title = 'Example' }: ExampleProps) {
  return (
    <div className={cn(styles.container, className)}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
    </div>
  );
}
