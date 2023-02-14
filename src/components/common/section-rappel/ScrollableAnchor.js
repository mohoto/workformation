import React from 'react'
import {useRouter} from 'next/router'

export default function ScrollableAnchor({id, children}) {

    const router = useRouter();
    const hashMatchRegex = useRef(new RegExp(/(?<=#)\w*/));
    const scrollTargetElementRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const match = router.asPath.match(hashMatchRegex.current);
      if (match && match[0] === id) {
        scrollTargetElementRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, [id, router.asPath]);
  
    return (
      <div id={id} ref={scrollTargetElementRef}>
        {children}
      </div>
    );
  }