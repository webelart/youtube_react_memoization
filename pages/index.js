import styles from '../styles/Home.module.css';
import MyHeavyComponent from './components/MyHeavyComponent';

/**
 * 1. useMemo from heavy computation
 * 2. Separate components
 * 3. useMemo for reducing number of times component re-render
 * 4. React.memo -> pure component 
 * 5. Preserved references
 * 6. useCallback for MemoizedSubComponent
 * 6. When to use these hooks
 */

export default function Home() {
  return (
    <div className={styles.container}>
      <MyHeavyComponent />
    </div>
  )
}
