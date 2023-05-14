import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

function App() {

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  // for modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='body'>
      {/* Header Menu Bar */}
      <div className="header_top">
        <img
          className='header_image'
          src="https://i.imgur.com/fdGIDKH.jpg"
          alt="" />
      </div>

      <div className='nav_bar'>

        {/* Menu_bar */}
        <nav id="navbar">
          <ul id='options_navbar'>
            <li className="item"><a href="#about_us">About Us</a></li>
            <li className="item"><a href="#services-container">What We Can Help With</a></li>
            <li className="item"><a href="#professional_friends">Professional Friends</a></li>
            <li className="item"><a href="#insura">Insurance</a></li>
            <li className="item"><a href="#faq">FAQ</a></li>
          </ul>
          <Button className='button_navbar' href="" >Book Appointment</Button>
        </nav>

      </div>

      {/* Data Block */}
      <div className='data_block'>

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Item>
              <img
                className='data_pic'
                src="https://i.imgur.com/ux36WXl.jpg"
                alt="" height={200} />
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item className='data_backed'>
              <h1>Interpreting the data</h1>
              <p>The pivot table represents the number of people who said they did not have access to mental health care due to 5 common reasons of availability. We aim to cater to all of these reasons to make mental health accessible to everyone! </p>

              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8214217/">Know more</a>
            </Item>
          </Grid>
        </Grid>
      </div>


      <div className='quickhelp'>
        <Paper className='insurance_paper' elevation={5} sx={{ p: 2, marginTop: 0, marginBottom: 0, flexGrow: 1, padding: 0.3 }}>
          <h1 className='heading_h1'>Quick Help</h1>
          <Box sx={{ width: '100%' }}>
            <Grid container >
              <Grid item xs={6}>
                <iframe width='100%' height="300px" src="https://www.youtube.com/embed/uqGTphrGHi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Grid>
              <Grid item xs={6}>
                <iframe width="100%" height="300px" src="https://www.youtube.com/embed/xRxT9cOKiM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Grid>
            </Grid>
            <Grid container >
              <Grid item xs={6}>
                <iframe width="100%" height="300px" src="https://www.youtube.com/embed/tLrmZXheY5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Grid>
              <Grid item xs={6}>
                <iframe width='100%' height="300px" src="https://www.youtube.com/embed/eKf_G0ZSmBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </div>


      <div className='aboutus' id='about_us'>
        <Paper className='insurance_paper' elevation={5} sx={{ p: 2, marginTop: 7, marginBottom: 5, flexGrow: 1, padding: 5 }}>
          <h1 className='heading_h1'>About Us</h1>

          <p>
            Our Mission: To redefine how people access help from Psychologists by making therapy more
            accessible to everyone.
            Contributing to the Environment: For every appointment, 10% of the funds will go towards&nbsp;
            <a href="https://www.greenpeace.org/international">Greenpeace</a>. We encourage virtual options for
            appointments to cut down on the amount of CO2 emissions.
          </p>

          <p>
            Team: Dr. Psy is founded by Mujaddad Fazeel, Maulik Sehgal, Sonum, and Ammar Baig – a team of
            Computer Science students with a vision of making mental health accessible to everyone, including
            people with disabilities. We are actively giving back to the environment to help reduce the effects of
            global warming by offering mental health services virtually to reduce the amount of CO2 emissions and financially contributing to Greenpeace.
          </p>

          <p>
            Contact Us: For any queries or assistance, please email us at drpsy@outlook.com. We are currently
            working on a chatbot feature to make this application easier for you!
          </p>
        </Paper>
      </div>

      {/* Grid  */}
      <div className='mental_issues'>
        <Paper className='insurance_paper' elevation={3} sx={{ p: 2, marginTop: 7, marginBottom: 5, flexGrow: 1, padding: 5 }}>

          <section id="services-container" >
            <h1 class="heading_h1">
              Ways we can help
            </h1>
            <div id="services">
              <div class="box">
                <img src="https://i.pinimg.com/originals/1b/56/1e/1b561e7c695e69ea57c104bd062a9337.gif" alt="" />
                <h2 class="h-secondary center">Anxiety</h2>

              </div>
              <div class="box">
                <img src="https://www.verywellmind.com/thmb/dNoDzASLJp76CrSITZya_XsBM18=/800x450/filters:fill(ABEAC3,1)/Anim_ADHD1-5a661e9a37d2c40036d3ae3c.gif" alt="" />
                <h2 class="h-secondary center">ADHD</h2>
              </div>
              <div class="box">
                <img src="https://thumbs.gfycat.com/ColossalDeadlyBluebottlejellyfish-small.gif" alt="" />
                <h2 class="h-secondary center">PTSD</h2>

              </div>
            </div>
          </section>

          <section id="services-container" >
            <div id="services">
              <div class="box">
                <img src="https://media1.tenor.com/images/433058387f7d41180672032d1b11ef54/tenor.gif?itemid=3629549" alt="" />
                <h2 class="h-secondary center">Bipolar Disorder</h2>

              </div>
              <div class="box">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4df5d35474465.56f9167a44cc3.gif" alt="" />
                <h2 class="h-secondary center">OCD</h2>

              </div>
              <div class="box">
                <img src="https://media2.giphy.com/media/QxqlJhp6P8ehLIjIVC/giphy.gif?cid=790b76118e865cc1f8067de5c138a6dc4484f0510c02dd22&rid=giphy.gif&ct=g" alt="" />
                <h2 class="h-secondary center">Panic Disorder</h2>

              </div>
            </div>
          </section>

        </Paper>
      </div>








      {/* <div className='grid_block'>
        <h3>Mental Health Issues we specialize in:</h3>
        <Grid container spacing={5}direction="row"
        alignItems="center"
        justifyContent="center" display="flex">
          <Grid item xs={4}>
            <Item className='item_class'>
              <img
                className='data_pic'
                src="https://i.pinimg.com/originals/1b/56/1e/1b561e7c695e69ea57c104bd062a9337.gif"
                alt="" />
                <h4></h4>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className='item_class'>
              <img
                className='data_pic'
                src="https://www.verywellmind.com/thmb/dNoDzASLJp76CrSITZya_XsBM18=/800x450/filters:fill(ABEAC3,1)/Anim_ADHD1-5a661e9a37d2c40036d3ae3c.gif
                "
                alt="" />
                <h4>ADHD</h4>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className='item_class'>
              <img
                className='data_pic'
                src="https://thumbs.gfycat.com/ColossalDeadlyBluebottlejellyfish-small.gif"
                alt="" />
                <h4>Bipolar Disorder</h4>
            </Item>
          </Grid>
        </Grid>
          <Grid container spacing={5} >
          <Grid item xs={4}>
            <Item className='item_class'>
              <img
                className='data_pic'
                src="https://media1.tenor.com/images/433058387f7d41180672032d1b11ef54/tenor.gif?itemid=3629549"
                alt="" />
                <h4>PTSD</h4>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className='item_class'>
              <img
                className='data_pic'
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4df5d35474465.56f9167a44cc3.gif
                "
                alt="" />
                <h4>OCD</h4>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className='item_class'>
              <img
                className='data_pic'
                src=" https://media2.giphy.com/media/QxqlJhp6P8ehLIjIVC/giphy.gif?cid=790b76118e865cc1f8067de5c138a6dc4484f0510c02dd22&rid=giphy.gif&ct=g"
                alt="" />
                <h4>Panic Disorder</h4>
            </Item>
          </Grid>

        </Grid>

      </div> */}

      {/* Professionla Section */}
      <div id='professional_friends'>
        <Paper className='insurance_paper' elevation={3} sx={{ p: 2, marginTop: 7, marginBottom: 5, flexGrow: 1, padding: 5 }}>
          <h3 className='heading_h1'>Your Professional friends</h3>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="225"
                      image="https://i.imgur.com/bOQXSdz.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dr. Jay Gaveras
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        She is triple board-certified in child and adolescent psychologist and adult psychologist. She has been practicing for over 18 years. She received her psychology degree from the University of New England College of Osteopathic Medicine in Biddeford, ME
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <Button onClick={handleOpen}>Know more</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                            Dr. Jay Gaveras
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            She is triple board-certified in child and adolescent psychologist and adult psychologist. She has been practicing for over 18 years. She received her psychology degree from the University of New England College of Osteopathic Medicine in Biddeford, ME

                            Typically, she offers supportive or emotionally focused therapy in 30-minute follow-up visits. However, occasionally Dr. Gaveras may believe that additional therapy is also needed and ask that you bring another therapist into your care team to provide the best outcome.


                            In addition to general, child, and adolescent psychology, Dr. Gaveras is also board-certified in addiction medicine and trained in the Eating Disorders, Compulsions and Addictions Service (EDCAS) program at the William Alanson White Institute.

                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                  </CardActions>
                </Card>

              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="225"
                      image="https://i.imgur.com/x4Y7HdK.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dr. Amy Herney
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Dr. Herney is an adult psychologist who completed her undergraduate education at Rutgers University and earned his medical degree at Ross University. She completed her training at New York-Presbyterian/Columbia University Medical Center.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <Button onClick={handleOpen}>Know more</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title2"
                        aria-describedby="modal-modal-description2"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title2" variant="h6" component="h2">
                            Dr. Amy Herney
                          </Typography>
                          <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                            Dr. Herney is an adult psychologist who completed her undergraduate education at Rutgers University and earned his medical degree at Ross University. She completed her training at New York-Presbyterian/Columbia University Medical Center.
                            Dr. Herney is passionate about and experienced in providing holistic, thoughtful, evidence-based care for patients with depression, anxiety, obsessive compulsive disorder, bipolar disorder, trauma-related disorders, relationship issues and struggles with self-image. She believes empathy and understanding are the most fundamental components of the doctor-patient relationship. She provides psychiatric medication management and integrates supportive psychotherapy, elements of dialectical behavioral therapy (DBT), stress management techniques and lifestyle interventions to meet patients where they are and collaborate toward improvement and optimization of their wellness.

                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                  </CardActions>
                </Card>

              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="225"
                      image="https://i.imgur.com/06JBU4U.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dr. Brandon Abernethy
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Dr. Abernethy is a board-certified psychologist. He received his medical degree from the University of Texas Medical School at Houston. He completed his internship at UT Southwestern in Dallas, and later obtained a Master's of Public Health in Epidemiology and Occupational and Environmental Health at Texas A&M.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <Button onClick={handleOpen}>Know more</Button>
                      {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title3"
                        aria-describedby="modal-modal-description3"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title3" variant="h6" component="h2">
                            Dr. Brandon Abernethy
                          </Typography>
                          <Typography id="modal-modal-description3" sx={{ mt: 2 }}>
                            Dr. Abernethy is a board-certified psychologist. He received his medical degree from the University of Texas Medical School at Houston. He completed his internship at UT Southwestern in Dallas, and later obtained a Master's of Public Health in Epidemiology and Occupational and Environmental Health at Texas A&M.

                            Dr. Abernethy has more than 12 years of experience practicing psychiatry in various outpatient settings including private practice and community mental health centers in both Texas and Oklahoma reaching underserved communities. He has experience treating a wide scope of mental health related symptomatology among diverse populations including mood and anxiety related issues.
                            Dr. Abernethy is willing to treat the younger population, and a majority of Dr. Abernethy's experience over the past decade has been with treating Children and Adolescents including but not limited to ADHD symptoms, conduct/behavioral related issues, anxiety, and teenage depression.
                            Dr. Abernethy employs a collaborative and patient centered approach, and his practice focuses on providing medication interventions in cooperation with the individual and their specific treatment goals as deemed clinically indicated to help treat/reduce mental health related issues. Dr. Abernethy does offer supportive treatment which would usually be in conjunction with medication management services. A typical follow up visit may average 20-30 minutes.

                          </Typography>
                        </Box>
                      </Modal> */}
                    </div>
                  </CardActions>
                </Card>

              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="225"
                      image="https://i.imgur.com/7rn4JtZ.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dr. Geneva Aguiar
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Dr. Geneva Aguiar is a board-certified adult psychiatrist. She received her medical degree from St. George's University and went on to start her residency training at Allegheny General Hospital in Pittsburgh where she was chief resident. She completed training at Northwell's Staten Island University Hospital.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div>
                      <Button onClick={handleOpen}>Know more</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title4"
                        aria-describedby="modal-modal-description4"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title4" variant="h6" component="h2">
                            Dr. Geneva Aguiar
                          </Typography>
                          <Typography id="modal-modal-description4" sx={{ mt: 2 }}>
                            Dr. Geneva Aguiar is a board-certified adult psychiatrist. She received her medical degree from St. George's University and went on to start her residency training at Allegheny General Hospital in Pittsburgh where she was chief resident. She completed training at Northwell's Staten Island University Hospital.

                            Dr. Aguiar's mental health care incorporates a holistic approach while treating clients to facilitate healing and wellness. She incorporates non-pharmaceutical interventions to supplement medication management including, but not limited to, mindfulness, breathwork, CBT, DBT, and supportive therapy in 30min sessions.

                            While having treated a wide variety of patients, her focus during training has been treating young adults with adjustment, depressive and anxiety disorders, and ADHD. She has a passion for working with women in the perinatal period and the LGBTQIA2S+ community. Following residency, she worked at NYC's HHC Harlem Hospital as an Attending Physician in the Comprehensive Psychiatric Emergency Program (CPEP).

                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                  </CardActions>
                </Card>

              </Item>
            </Grid>
          </Grid>
        </Paper>
      </div>



      {/* Insurance section */}
      <div id='insura'>
        <Paper className='insurance_paper' elevation={3} sx={{ p: 2, marginTop: 7, marginBottom: 5, flexGrow: 1, padding: 5 }}>

          <h1 className='heading_h1'>Costs</h1>

          <p>
            We offer most major insurance plans including student insurance plans. To know if we cover
            your plan (we probably do!), select your insurance carrier, and then select your insurance plan.
            Note: The total coverage will be determined by your insurance carrier.

            <a href="https://www.google.com">Know more</a>. We encourage virtual options for
            appointments to cut down on the amount of CO2 emissions.
          </p>
        </Paper>

      </div>

      <div id='faq'>
        <Paper elevation={3} sx={{ p: 2, margin: 'auto', flexGrow: 1, padding: 5 }}>
          <h1 className='heading_h1'>FAQs</h1>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Where is the office located?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our office is currently located at 300 West First St, Arlington, Texas, 76010.
                We also offer 24/7 online appointments through our website.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How do we book an appointment?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To book an appointment, please go to ‘Book my appointment’ at the top right corner of our
                page. They can be Virtually face-to-face, virtual or phone call, or text chat.
                We are currently working on including an option to talk to a psychologist-trained chat bot
                as well.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>What is a ‘professional friend’?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A professional friend is a certified psychologist who has specialized in our listed mental health issues.
                We are currently adding more mental health issues and certified psychologists for everyone!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Is Dr. Psy for me?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dr. Psy is for anyone who seeks help in mental health issues, needs therapy,
                or just needs someone they can talk to.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>Do I have to inform my psychologist of my medical history?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                During your first visit, you do not need to explain your medical history.
                Your therapist already has your medical history and the information you provide while
                booking an appointment.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>How do I prepare for my appointment?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Just be there! Make sure you are in a comfortable environment where you can speak to your
                psychologist. If virtual, make sure you have a good internet connection. For in-person appointments,
                please check in at least 5 minutes before your appointment time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography>What are your hours?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our in-person hours are Monday to Sunday, 8 AM to 8 PM. Our virtual appointments are 24/7.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography>Do you offer Psychiatry?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Currently, we do not offer stand-alone psychiatry. However, if your therapist feels the need to include a psychiatrist to be involved then they will provide a referral.


              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </div>
      <Paper elevation={1} sx={{ p: 2, margin: 'auto', flexGrow: 1, padding: 5 }}>
      </Paper>


    </div>


  );

}

export default App;