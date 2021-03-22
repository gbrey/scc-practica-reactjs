import React from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Typography from "./components/Typography";

import useCounter from "./hooks/useCounter";

const Counter = ({ initialValue }) => {
  const { count, decrement, increment } = useCounter({
    initialValue
  });

  return (
    <Container>
      <Button variant="secondary" onClick={decrement}>
        -
      </Button>
      <Typography>{count}</Typography>
      <Button variant="primary" onClick={increment}>
        +
      </Button>
    </Container>
  );
};

Counter.displayName = "Counter";

export default Counter;
