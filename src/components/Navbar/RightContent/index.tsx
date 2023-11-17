import React from "react";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthModal from "../../Modal/Auth";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import MenuWrapper from "./ProfileMenu/MenuWrapper";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" alignItems="center">
        {user ? <Icons /> : <AuthButtons />}
        <MenuWrapper />
      </Flex>
    </>
  );
};
export default RightContent;
