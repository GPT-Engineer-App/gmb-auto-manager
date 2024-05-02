// Automated GMB Manager for 3broz-seo.com
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaChartLine, FaComments, FaPlus, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">
          3broz-seo GMB Manager
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="teal">
          New Post
        </Button>
      </Flex>
      <VStack spacing={8} mt={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Auto-Posting</Heading>
          <Text mt={4}>Schedule and automate your Google My Business postings with ease. Support for text, images, and promotions.</Text>
          <Button mt={4} leftIcon={<FaCalendarAlt />} colorScheme="blue">
            Manage Posts
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Review Management</Heading>
          <Text mt={4}>Automatically monitor and respond to reviews. Set criteria for responses based on keywords and ratings.</Text>
          <Button mt={4} leftIcon={<FaComments />} colorScheme="green">
            Manage Reviews
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Dashboard & Reporting</Heading>
          <Text mt={4}>Get real-time insights into post performance and review interactions. Track engagement and audience growth.</Text>
          <Button mt={4} leftIcon={<FaChartLine />} colorScheme="purple">
            View Dashboard
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Settings & Integration</Heading>
          <Text mt={4}>Configure system settings and integrate with existing tools and platforms.</Text>
          <Button mt={4} leftIcon={<FaTools />} colorScheme="orange">
            System Settings
          </Button>
        </Box>
      </VStack>
      <Flex justifyContent="center" alignItems="center" mt={10}>
        <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBteSUyMGJ1c2luZXNzJTIwbG9nb3xlbnwwfHx8fDE3MTQ2NTI2NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
      </Flex>
    </Box>
  );
};

export default Index;
