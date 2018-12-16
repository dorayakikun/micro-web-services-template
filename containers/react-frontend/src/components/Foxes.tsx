import React from "react";
import { Theme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core/styles";

export interface FoxViewModel {
  name: string;
  scientificName: string;
}

const styles = (theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto"
    },
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
  });

export interface Props {
  isLoading: boolean;
  isLoaded: boolean;
  foxes: FoxViewModel[];
  error?: Error;
  classes: {
    appBarSpacer: any;
    content: any;
    root: any;
    table: any;
  };
  onLoad: () => void;
}

class FoxesFragment extends React.Component<Props> {
  componentDidMount() {
    if (this.props.isLoading || this.props.isLoaded) {
      return;
    }
    this.props.onLoad();
  }

  render = () => (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Foxes
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={this.props.classes.content}>
        <div className={this.props.classes.appBarSpacer} />
        <Typography component="div">
          <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
              <TableBody>
                {this.props.foxes.map((fox: FoxViewModel) => {
                  return (
                    <TableRow key={fox.scientificName}>
                      <TableCell>
                        <Typography variant="h6">{fox.name}</Typography>
                        <Typography>{fox.scientificName}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Typography>
      </main>
    </React.Fragment>
  );
}

export const Foxes = withStyles(styles)(FoxesFragment);
