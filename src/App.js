import {Box, Button, Checkbox, Container, Divider, FormControlLabel, Grid, Tooltip} from "@mui/material";
import shuffle from "fisher-yates-shuffle";
import Slider from "@mui/material/Slider";
import {useState} from "react";

const alphaList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbersList = "0123456789".split("");
const symbolsList = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split("");

function LengthSlider({length, setLength}) {
  const handleChange = (event, newValue) => setLength(newValue);

  return (
    <Box
      sx={{
        width: "50%"
      }}
    >
      <Box>Length: {length}</Box>
      <Slider
        value={length}
        onChange={handleChange}
        min={10}
        max={50}
      />
    </Box>
  );
}

function App() {
  const [length, setLength] = useState(10);
  const [letters, setLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [noRepeated, setNoRepeated] = useState(true);
  const [, setStateTrigger] = useState(false);

  const generatePassword = (length) => {
    let charList = [];

    if (letters) {
      charList = charList.concat(alphaList);
    }

    if (numbers) {
      charList = charList.concat(numbersList);
    }

    if (symbols) {
      charList = charList.concat(symbolsList);
    }

    if (noRepeated === false) {
      charList = charList.join("").repeat(Math.ceil(Math.random() * 10)).split("");
    }

    charList = shuffle(charList).join("").repeat(2);
    return charList.substring(0, length);
  }

  const pass1 = generatePassword(length);
  const pass2 = generatePassword(length);

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        mt: {
          xs: 0,
          md: "100px"
        }
      }}
    >
      <h1>Generate a</h1>
      <h1
        style={{
          color: "rgb(49, 231, 140)"
        }}
      >random password</h1>
      <h3>Never use an insecure password again.</h3>

      <p>Password attributes:</p>

      <LengthSlider
        length={length}
        setLength={setLength}
      />

      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={numbers}
              onChange={(event) => setNumbers(event.target.checked)}
            />
          }
          label={"Numbers"}
        />
      </Box>

      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={letters}
              onChange={(event) => setLetters(event.target.checked)}
            />
          }
          label={"Letters"}
        />
      </Box>

      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={symbols}
              onChange={(event) => setSymbols(event.target.checked)}
            />
          }
          label={"Symbols"}
        />
      </Box>

      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={noRepeated}
              onChange={(event) => setNoRepeated(event.target.checked)}
            />
          }
          label={"No repeated characters"}
        />
      </Box>

      <Button
        variant={"contained"}
        color={"success"}
        sx={{
          mt: "20px",
        }}
        onClick={() => setStateTrigger((prevState) => !prevState)}
      >Generate passwords</Button>

      <Divider
        variant={"fullWidth"}
        sx={{
          backgroundColor: "rgba(180, 180, 180, 0.26)",
          borderRadius: "2px",
          my: "35px",
          height: "2px"
        }}
      />

      <Grid
        container
        justifyContent={"space-between"}
        gap={"20px"}
      >
        <Grid item flexGrow={1}>
          <Tooltip title={"Click to Copy"}>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => navigator.clipboard.writeText(pass1)}
            >{pass1}</Button>
          </Tooltip>
        </Grid>

        <Grid item flexGrow={1}>
          <Tooltip title={"Click to Copy"}>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => navigator.clipboard.writeText(pass2)}
            >{pass2}</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
