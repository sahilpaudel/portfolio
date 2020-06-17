import { makeStyles, Typography, Chip } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "../../components/PanelUtility";
import { project } from "../../dataSource/projectData";
import Layout from "../../components/Layout";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 15,
  },
  year: {
    position: "absolute",
    right: 15
  },
  chip: {
    margin: "10px 10px 10px 0"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  contributionText: {
    marginTop: 10,
    fontWeight: "bold",
    textDecoration: "underline"
  },
  contribution: {
    marginTop: 5,
    fontSize: 13,
    wordSpacing: "-0.1em"
  },
  stackText: {
    marginTop: 10,
    fontWeight: "bold",
    textDecoration: "underline"
  },
  stack: {
    marginTop: 5
  },
  footer: {
    '& .MuiChip-root': {
      borderRadius: 0
    }
  }
}));

const Projects = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return <Layout>
    <div className={classes.root}>
      {
        project.map((project, i) =>
          <ExpansionPanel
            square
            key={project.name}
            expanded={expanded === 'panel' + i}
            onChange={handleChange('panel' + i)} >
            <ExpansionPanelSummary aria-controls={`panel${i + 1}d-content`} id={`panel${i + 1}d-header`}>
              <Typography>{project.name}</Typography>
              <Typography className={classes.year}>{project.year}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div>
                <Typography className={classes.contributionText}>Contribution:</Typography>
                <Typography className={classes.contribution}>
                  {
                    project.contribution
                  }
                </Typography>
              </div>
              <div>
                <Typography className={classes.contributionText}>Description:</Typography>
                <Typography className={classes.contribution}>
                  {
                    project.description
                  }
                </Typography>
              </div>
              <div className={classes.footer}>
                <Typography className={classes.stackText}>Stack:</Typography>
                {
                  project.stack.map((s, i) => <Chip key={i} label={s} variant="outlined" size="small" className={classes.chip} />)
                }
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>)
      }
    </div>
  </Layout>
}

export default Projects;