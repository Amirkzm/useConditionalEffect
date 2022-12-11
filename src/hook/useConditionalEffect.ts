import React, { useEffect, useRef, useState } from "react";

interface EffectFunctionResult {
  finished: boolean;
  cleanup: Cleanup;
}

interface Props {
  effectFunction: () => boolean | EffectFunctionResult;
  dependencies?: React.DependencyList;
}

type Cleanup = () => void;

const useConditionalEffect = (
  effectFunction: Props["effectFunction"],
  dependencies: Props["dependencies"]
) => {
  const flag = useRef<boolean>(false);
  const [cleanup, setCleanup] = useState<Cleanup | null>(null);

  useEffect(() => {
    if (!flag.current) {
      const result = effectFunction();
      if (typeof result === "boolean") {
        flag.current = result;
      } else {
        flag.current = result.finished;

        if (!flag.current) {
          return result.cleanup;
        } else {
          setCleanup(result.cleanup);
        }
      }
    }
  }, dependencies);

  useEffect(() => {
    if (cleanup) {
      return cleanup;
    }
  }, [cleanup]);
};

export default useConditionalEffect;
