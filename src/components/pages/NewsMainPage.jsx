import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { getAllNews } from "../../api/NewsApi";
import { useQuery } from "react-query";
import { Stack } from "@mui/system";
import { Button, ButtonGroup, TextField } from "@mui/material";
import SavedNewses from "../Elements/Tab/SavedNewses";
import TabPage from "../Elements/Tab/TabPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NewsMainPage() {
  const [apiSwitch, setApiSwitch] = useState(true);
  const [value, setValue] = useState(0);
  const [Newses, setNewses] = useState([]);
  const [savedNewses, setAllSavedNewses] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategoty] = useState("business");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [totalResults, setTotalresults] = useState(0);

  const onTypingSearch = (e) => {
    setSearchFieldValue(e.target.value);
  };

  const setSavedNewses = (values) => {
    setAllSavedNewses(values);
    localStorage.setItem("savedNewses", JSON.stringify(values));
  };
  useEffect(() => {
    const localStorageNewses = JSON.parse(localStorage.getItem("savedNewses"));
    console.log("local :", localStorageNewses, "state:", savedNewses);
    console.log(
      "is equal",
      JSON.stringify(localStorageNewses) === JSON.stringify(savedNewses)
    );
    setAllSavedNewses([...localStorageNewses]);
  }, [Newses, savedNewses]);

  useQuery(
    ["getAllNews", searchText, apiSwitch],
    () => {
      return axios.get(
        getAllNews(country, category, page, pageSize, searchText)
      );
    },
    {
      onSuccess: (data) => {
        if (page === 0) {
          setNewses(data?.data?.articles);
        } else if (page > 0) {
          setNewses(Newses.concat(data?.data?.articles));
        }

        setTotalresults(data?.data?.totalResults);
      },
    }
  );

  const handleChangeTab = (event, newValue) => {
    setPage(0);
    console.log("found tab value :", newValue);
    if (newValue === 0) {
      setCategoty("business");
    } else if (newValue === 1) {
      setCategoty("sports");
    } else if (newValue === 2) {
      setCategoty("entertainment");
    } else if (newValue === 3) {
      setCategoty("general");
    }
    setApiSwitch(!apiSwitch);
    setValue(newValue);
  };
  const fetchMoreData = () => {
    console.log("!!!!new fetch trigger !!!!!!");
    setPage(page + 1);
    setApiSwitch(!apiSwitch);
  };

  //console.log("current category :", category);
  console.log("saved newses are :", savedNewses);

  return (
    <>
      {" "}
      <div
        style={{
          paddingTop: "40px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" sx={{ width: "100%" }} justifyContent="center">
          <TextField
            sx={{ width: "90%", backgroundColor: "#ffffff" }}
            value={searchFieldValue}
            onChange={onTypingSearch}
            label="Search news"
            InputProps={{
              endAdornment: (
                <>
                  <ButtonGroup variant="contained">
                    <Button
                      onClick={() => {
                        setPage(0);
                        setSearchtext(searchFieldValue);
                        console.log("search text :", searchFieldValue);
                        setApiSwitch(!apiSwitch);
                      }}
                      startIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        setPage(0);
                        setSearchtext("");
                        setSearchFieldValue("");
                        setApiSwitch(!apiSwitch);
                      }}
                      startIcon={<RestartAltIcon />}
                    >
                      Reset
                    </Button>
                  </ButtonGroup>
                </>
              ),
            }}
          />
        </Stack>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
            indicatorColor="secondary"
          >
            <Tab type="contained" label="Business" {...a11yProps(0)} />
            <Tab label="Sports" {...a11yProps(1)} />
            <Tab label="Entertainment" {...a11yProps(2)} />
            <Tab label="General" {...a11yProps(3)} />
            <Tab label="Saved" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TabPage
            tabName={"Business News"}
            Newses={Newses}
            fetchMoreData={fetchMoreData}
            totalResults={totalResults}
            setSavedNewses={setSavedNewses}
            savedNewses={savedNewses}
          />
        </TabPanel>
        <TabPanel component="div" value={value} index={1}>
          <TabPage
            tabName={"Sports News"}
            Newses={Newses}
            fetchMoreData={fetchMoreData}
            totalResults={totalResults}
            setSavedNewses={setSavedNewses}
            savedNewses={savedNewses}
          />
        </TabPanel>
        <TabPanel component="div" value={value} index={2}>
          <TabPage
            tabName={"Entertainment News"}
            Newses={Newses}
            fetchMoreData={fetchMoreData}
            totalResults={totalResults}
            setSavedNewses={setSavedNewses}
            savedNewses={savedNewses}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabPage
            tabName={"General News"}
            Newses={Newses}
            fetchMoreData={fetchMoreData}
            totalResults={totalResults}
            setSavedNewses={setSavedNewses}
            savedNewses={savedNewses}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SavedNewses
            tabName={"Saved Newses"}
            savedNewses={savedNewses}
            setSavedNewses={setSavedNewses}
          />
        </TabPanel>
      </Box>
    </>
  );
}
