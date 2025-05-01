import { useEffect, useState } from 'react';

const Themetoggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button onClick={() => setIsDark(!isDark)} className="p-2 border rounded">
            Toggle Theme
        </button>
    );
};

export default Themetoggle;