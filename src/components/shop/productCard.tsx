import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';


import { Product } from 'src/types/general';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    // padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));



function buyProduct(link:string){

    window.location.href = link

}




function ProductIframe({link}: {link:string}){

    return (
        // <iframe 
        // src={link} title="YouTube video player"  
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>




        <iframe className="object-cover object-center w-full h-full block" 
        width="560" height="315"  
        // width="100%" height="600rem" 
        src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
    )

}




export function ProductCard(props: Product) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        {props.image ? <Image src={props.image} height={180} alt="Tesla Model S" /> : <ProductIframe link={props.iframe} />}
    
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{props.name}</Text>
          {/* <Text fz="xs" c="dimmed">
            Free recharge at any station
          </Text> */}
        </div>
        {/* <Badge variant="outline">25% off</Badge> */}
      </Group>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {props.price}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per day
            </Text>
          </div>

          <Button className="lg:mt-2 absolute right-4  lg:ml-3 xl:mt-0 mt-3 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" radius="lg" onClick={()=> { buyProduct(props.link) }}>
             Buy Now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}