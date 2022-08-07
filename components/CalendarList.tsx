import { Flex, HStack, Text, Box, Button, SimpleGrid, GridItem, Heading, propNames } from '@chakra-ui/react'
import { DatasetJsonLd } from 'next-seo'
import { CalendarItem } from '../components/CalendarItem'

const data = [
  { start: "09-06-2022",
    end: "09-06-2022",
    title: "MetaCartel Townhall Taco Party",
    desc: "Party Time.",
    url: "https://metacartel.org", 
  },
  { start: "09-06-2022",
    end: "09-09-2022",
    title: "MCON 2", 
    desc: "Party Time.",
    url: "https://metacartel.org", 
  },
  { start: "09-08-2022",
    end: "09-08-2022",
    title: "HausParty",
    desc: "Party Time.",
    url: "https://metacartel.org",
  },
]

export const CalendarList = () => {
  return (
    <Box p={25}>
      <HStack flexDirection="row" py={25}>
        <h2>Upcoming Events</h2>
        <Button
          as='a'
          borderWidth={2}
          borderColor="brand.black"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
          bg='none'
          cursor='pointer'
          _hover={{bg: 'brand.black', color: 'white'}}
        >
          View
        </Button>
      </HStack>
      <SimpleGrid columns={[1, null, 2, 3]} spacing='40px'>
        {data.map(({start, end, title, desc, url }) => (
            <CalendarItem 
              key={title}
              start={start}
              end={end}
              title={title}
              desc={desc}
              url={url}
            />
        ))}
      </SimpleGrid>
    </Box>
  )
}
