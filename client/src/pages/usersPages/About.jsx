import { Footer, NavBaar } from "../../components";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  Link,
} from "@mui/material";


export default function AboutUs() {
  return (
    <>
      <NavBaar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 mt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                About OSAY
              </h2>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Welcome to OSAY, where we celebrate the rich tapestry of
                lifestyles that define us. Born from the need to centralize
                diverse choices, we're the platform that opens doors to global
                lifestyles. At OSAY, choice and personalization are paramount.
                Explore a curated selection of products and accessories tailored
                to your unique preferences and way of life. With us, expressing
                your individuality is effortless, empowering you to shop
                confidently and authentically. Discover the lifestyle that
                resonates with you and make it your own at OSAY.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  To leverage the power of technology to deliver a seamless and
                  enjoyable shopping experience for our customers, while
                  continuously expanding our product offerings to meet their
                  evolving needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Values</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Integrity, innovation, customer-centricity, and a relentless
                  pursuit of excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Accomplishments</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Recognized as a leading e-commerce store, with numerous awards
                  and accolades for our exceptional customer service, diverse
                  product selection, and innovative shopping features.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </section>
      <section className="w-full bg-gray-100 dark:bg-gray-800 mt-0 p-12">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Meet Our Team
      </h1>
        <Grid container spacing={3} mt={3}>
          {[
            {
              name: "Othman Geurrar",
              
              description:
                "Othman is the visionary behind our company, leading the team with his strategic insights and unwavering commitment to excellence.",
              imgSrc: "/placeholder-user.jpg",
              initials: "OG",
            },
            {
              name: "Mohammed Amine Ghanim",
              
              description:
                "Mohammed is our technical mastermind, driving innovation and ensuring the seamless execution of our projects.",
              imgSrc: "/placeholder-user.jpg",
              initials: "MG",
            },
            {
              name: "Soukaina Jawhar",
              
              description:
                "Soukaina is the creative force behind our stunning designs, ensuring that our solutions not only function flawlessly but also captivate our clients.",
              imgSrc: "/placeholder-user.jpg",
              initials: "SJ",
            },
            {
              name: "Youness Ait Manssour",
              
              description:
                "Youness is our marketing mastermind, driving our brand strategy and ensuring our message resonates with our target audience.",
              imgSrc: "/placeholder-user.jpg",
              initials: "YM",
            },
          ].map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar src={member.imgSrc} sx={{ width: 96, height: 96 }}>
                  {member.initials}
                </Avatar>
                <Box>
                  <Typography variant="h6">{member.name}</Typography>
                 
                  <Typography variant="body2" mt={1}>
                    {member.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
      
      <Footer />
    </>
  );
}
