import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import NextLink from "next/link";
import { server } from "../../../components/server";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const PaymentForm = () => {
  const [userId, setUserId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const router = useRouter();
  const { videoId } = router.query;
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("User"));
    const storedUserId = storedUserData?.user?.userId;
    setUserId(storedUserId);
  }, []);
  console.log("videoId ", videoId, " userId", userId);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoId || !userId) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        throw new Error(error.message);
      }

      const response = await axios.post(`${server}other/purchase-video`, {
        videoId,
        paymentMethodId: paymentMethod.id,
        userId,
      });

      console.log(response.data);

      if (response.status === 200) {
        setPaymentSuccessful(true);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={["50vh", "100vh"]}
    >
      <Box w={["lg", "xl"]} p={4} borderWidth="1px" borderRadius="lg">
        {paymentSuccessful ? (
          <Box textAlign="center" color="white" fontSize="lg">
            <Heading>Payment Successful!</Heading>
            <NextLink href="/User/Dashboard" passHref>
              <Heading size={"4xl"} my={[4, 6]}>
                <CheckCircleIcon color={"green"} />
              </Heading>
              <Link color="white">Go to Dashboard</Link>
            </NextLink>
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Card Details</FormLabel>
              <CardElement
                options={{
                  style: {
                    base: {
                      color: "white",
                      "::placeholder": {
                        color: "gray.400",
                      },
                    },
                    invalid: {
                      color: "red.500",
                    },
                  },
                }}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              disabled={loading}
              mt={[2, 4]}
              w={"100%"}
            >
              {loading ? <Spinner size="sm" /> : "Purchase Video"}
            </Button>

            {error && (
              <Box color="red.500" mt={2}>
                {error}
              </Box>
            )}
          </form>
        )}
      </Box>
    </Box>
  );
};

export default PaymentForm;
