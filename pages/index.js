import React, { useMemo, useCallback, useState } from 'react';

import MyHeavyComponent from './components/MyHeavyComponent';

/**
 * 1. useMemo from heavy computation
 * 2. Separate components
 * 3. useMemo for reducing number of times component re-render
 * 4. React.memo -> pure component 
 * 5. Preserved references
 * 6. useCallback for MemoizedSubComponent
 * 7. When to use these hooks
 */

export default function Home() {
	return (
		<div>
			<MyHeavyComponent />
		</div>
	);
}
