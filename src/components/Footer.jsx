import { Box, Text, Flex } from "@chakra-ui/react";
const Footer = () => {
	return (
		<Box className="footer">
			<Flex
				align="center"s
				justify="center"
				h="50px"
				bg="gray.200"
				borderTop="1px solid"
				borderColor="gray.300"
			>
				<Text className="studentName" mr={2}>
					Agnesfia Anggraeni
				</Text>
				<Text className="studentId">FE4930900</Text>
			</Flex>
		</Box>
	);
};

export default Footer;