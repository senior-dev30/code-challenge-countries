import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { CountryItem } from "../../components/country-item";
import {
  Box,
  Grid,
  OutlinedInput,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGetAllCountries } from "../../utills/hooks/useGetAllCountries";

const Home = () => {
  const countries = useGetAllCountries();
  const [searchValue, setSearchValue] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);
  const [selectedReg, setSelectedReg] = useState("");
  const regions = [
    "Filter by region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  useEffect(() => {
    if (countries?.length > 0) {
      setFilteredArr(countries);
    }
  }, [countries]);


  useEffect(() => {
    let filteredCountries = [];

    if (searchValue?.trim()) {
      filteredCountries = countries?.filter((el: any) =>
        el?.name?.common?.toLowerCase().includes(searchValue.trim()?.toLowerCase())
      );
      setFilteredArr(filteredCountries);
    } else {
      setFilteredArr(countries);
    }
    //eslint-disable-next-line
  }, [searchValue, countries]);

  useEffect(() => {
    let filteredRegion = [];

    if (selectedReg !== "Filter by region") {
      filteredRegion = countries.filter((el: any) =>
        el.region.includes(selectedReg.trim())
      );
      setFilteredArr(filteredRegion);
    } else {
      setFilteredArr(countries);
    }
  }, [selectedReg, countries]);

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <OutlinedInput
            placeholder="Search for a country..."
            startAdornment={<SearchIcon />}
            onChange={(e: any) => setSearchValue(e.target.value)}
            sx={{
              width: 300,
              marginBottom: 5,
            }}
          />
          <FormControl sx={{ width: 200 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="Filter by region"
              onChange={(e: any) => setSelectedReg(e.target.value)}
            >
              {regions &&
                regions.map((el: any, index: number) => (
                  <MenuItem value={el} key={index}>
                    {el}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            padding: "20px 20px",
          }}
        >
          {filteredArr.map((el: any, index: number) => (
            <Grid item xs={4} md={3} sm={4} key={el.population + (index + 1)}>
              <CountryItem coutry={el} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
