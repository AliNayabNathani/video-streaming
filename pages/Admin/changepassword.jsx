import { useState } from "react";
import axios from "axios";
import { VStack, FormLabel, Input, Button } from "@chakra-ui/react";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { server } from "../../components/server";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import PrivateRoute from "../PrivateRoute";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = `${server}auth/changepassword`;

      const requestBody = {
        oldPassword: oldPassword,
        newPassword: newPassword,
      };

      const response = await axios.patch(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      toast.success(`Password Changed Successfully`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      router.push("/Admin/Profile");
    } catch (error) {
      console.error("Error changing password", error.response);
    }
  };

  return (
    <VStack
      bg={"#232323"}
      border={"2px solid black"}
      borderRadius={"5px"}
      w={["auto", "50%"]}
      h={["auto", "80%"]}
      p={[5, 20]}
      marginInline={"auto"}
    >
      <form onSubmit={handleSubmit}>
        <FormLabel>Old Password: </FormLabel>
        <Input
          mb={"1rem"}
          onChange={(e) => setOldPassword(e.target.value)}
          type="password"
          focusBorderColor="#323232"
        />
        <FormLabel>New Password: </FormLabel>
        <Input
          mb={"1rem"}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          focusBorderColor="#323232"
        />
        <Button type="submit" mt={2} w={"100%"}>
          Update
        </Button>
      </form>
    </VStack>
  );
};

export default function ChangePassword() {
  return (
    <>
      <PrivateRoute allowedRole={"1"}>
        <PageHeading text={"Change Password"} />
        <ChangePasswordForm />
      </PrivateRoute>
    </>
  );
}
