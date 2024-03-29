import React, {ReactNode, ReactText} from 'react';
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import {
  FiBell,
  FiChevronDown,
  FiChevronsLeft,
  FiCompass,
  FiHome,
  FiMenu,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi';
import {IconType} from 'react-icons';
import ColorModeSwitcher from "../ColorModeSwitcher";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

function Sidebar({children,}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true});
  const [ isLargeDevice ] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent onClose={onClose} display={{ base: 'none', md: isLargeDevice && isOpen ? 'block' : 'none' }} />
        { !isLargeDevice && (
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            closeOnOverlayClick={true}
            closeOnEsc={true}
            size="xs">
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
        )}
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
        <Box ml={{ base: 0, md: isOpen ? 320 : 0 }} p="4">
          {children}
        </Box>
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('gray.200', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.100', 'gray.700')}
      w={{ base: '0', md: 'xs' }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="full" direction='column' justifyContent='space-between' >
        <Box>
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Brandlogo
            </Text>
          </Flex>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Box>
        <Box display='flex' justifyContent='flex-end'>
          <Button
            onClick={onClose}
            variant='ghost'
          >
            <Icon as={FiChevronsLeft}  boxSize={7} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="src/common/components/Sidebar/index#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}
const MobileNav = ({ onOpen, isOpen, onClose, ...rest }: MobileProps) => {
  const toggle = () => isOpen ? onClose : onOpen;
  return (
    <Flex
      ml={{ base: 0, md: isOpen ? 320 : 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('gray.200', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.300', 'gray.700')}
      justifyContent='space-between'
      {...rest}>
      <Button
        display='flex'
        onClick={toggle()}
        variant="outline"
        aria-label="close menu"
      >
        <Icon as={FiMenu} />
      </Button>
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Brand Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <ColorModeSwitcher />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Sidebar;