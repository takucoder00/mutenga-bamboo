import { useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';

function ScrollToTop({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;
