import {
  Alert as ChakraAlert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/alert";

function SuccessAlert({ title, desc }: { title: string; desc: string }) {
  return (
    <ChakraAlert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      maxHeight="135px"
      className="w-full max-w-2xl px-2 py-3 bg-green-500 border border-white rounded-sm dark:text-white"
    >
      <AlertIcon boxSize="20px" mt={10} />
      <AlertTitle
        mt={4}
        mb={1}
        mx={10}
        fontSize="lg"
        className="text-lg font-extrabold xl:text-xl "
      >
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm" mb={9} className="text-slate-100 ">
        {desc}
      </AlertDescription>
    </ChakraAlert>
  );
}

export default SuccessAlert;
