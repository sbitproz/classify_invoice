import React, { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// Own
import { logsService } from "./services/logsService";
import { LogsWrapper } from "./LogsStyles";

// Styles
import "./Logs.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Logs: React.SFC = () => {
  const classes = useStyles();
  const updateLogState = useCallback((response?: any) => {}, []);

  useEffect(() => {
    logsService.getLogs().subscribe(updateLogState);
  }, [updateLogState]);

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <LogsWrapper paddingSize="1rem">
      <div id="logs">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
              <FontAwesomeIcon size="10x" icon={["fas", "coffee"]} />
              <FontAwesomeIcon icon={faCoffee} />
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </LogsWrapper>
  );
};

export default Logs;
