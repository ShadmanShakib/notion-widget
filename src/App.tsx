import React from "react";
import dayjs from "dayjs";
import { Box, Text } from "@chakra-ui/react";
import dayoftheyear from "dayjs/plugin/dayOfYear";
import utc from "dayjs/plugin/utc";
import weekOfTheYear from "dayjs/plugin/weekOfYear";

function App() {
  dayjs.extend(dayoftheyear);
  dayjs.extend(utc);
  dayjs.extend(weekOfTheYear);
  const localDate = dayjs().local();
  const today = dayjs(localDate).dayOfYear();
  const thisWeek = dayjs().week();

  return (
    <Box bg="#222b37">
      <Box
        color="gray.200"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Text mr="5">Day of the Year:</Text>
        <Box color="white" fontSize="3xl">
          {today.toString()}
        </Box>
      </Box>
      <Box
        color="gray.200"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Text mr="5">Week of the Year:</Text>
        <Box color="white" fontSize="3xl">
          {thisWeek}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
