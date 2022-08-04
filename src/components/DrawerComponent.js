import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Flex,
} from '@chakra-ui/react';

const DrawerComponent = ({ isOpen, onClose, btnRef, user, clearUser }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      zIndex="popover"
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Flex flexDirection="column">
            <Link href="/" mb="3">Feed</Link>
            {user ? (
              <>
                <Link href="/myposts" mb="3">My Profile</Link>
                <Link onClick={clearUser} mb="3">Logout</Link>
              </>
            ) : 
            (
              <Link href="/signin" mb="3">Login</Link>
            )
            }
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;