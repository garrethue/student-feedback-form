import React from "react";
import { useToast, Button } from "@chakra-ui/core";

export default function Review() {
  const toast = useToast();

  return (
    <div>
      <Button
        onClick={
          () =>
            toast({
              title: "Form submitted.",
              description: "We have received your feedback. Thank you!",
              status: "success",
              duration: 5000,
              isClosable: true,
            }) //add toast to .then() //add setTimeOut to take them to a NEW PAGE
        }
      >
        Submit Form
      </Button>
    </div>
  );
}
