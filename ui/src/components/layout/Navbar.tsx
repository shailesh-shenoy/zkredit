import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useDisclosure,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { NAV_ITEMS } from "./types";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      zIndex={10}
      bg="whiteAlpha.800"
      color={"primary.900"}
      backdropFilter="saturate(180%) blur(10px)"
    >
      <Flex
        as="nav"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"none"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            colorScheme={"primary"}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        {/* <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}> */}
        <Flex flex={{ base: 0, md: 2 }} display={{ base: "none", md: "flex" }}>
          <Link as={NextLink} href="/">
            <Image src="/logo.png" alt="WagerWinz" h="48px" w="auto" />
          </Link>

          <Flex
            mr={12}
            display={{ base: "none", md: "flex" }}
            flex={{ base: 0, md: 2 }}
            justify="flex-end"
          >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack as={List} direction={"row"} spacing={10} align="center">
      {NAV_ITEMS.map((navItem) => (
        <ListItem key={navItem.label}>
          <Link as={NextLink} href={navItem.link}>
            {navItem.label}
          </Link>
        </ListItem>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack as={List} bg="transparent" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <ListItem key={navItem.label}>
          <Link as={NextLink} href={navItem.link}>
            {navItem.label}
          </Link>
        </ListItem>
      ))}
    </Stack>
  );
};
