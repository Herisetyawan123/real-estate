"use client"
import NavLeft from "@/components/molekul/navbar/nav-left";
import NavRight from "@/components/molekul/navbar/nav-right";
import { CiMenuFries } from "react-icons/ci";

import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <nav className="px-14 md:px-36 py-6 flex justify-between items-center bg-white-s">
        <NavLeft />
        <NavRight />
        <div className="block md:hidden">
          <Button colorScheme='teal' onClick={onOpen}>
            <CiMenuFries size={20} />
          </Button>

        </div>
      </nav>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />


          <DrawerBody>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>

  )
}
