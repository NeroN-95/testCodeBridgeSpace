import React from "react";
import {FormControl, InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface SearchProps {
    handleChange: any;
}

const TypeSearch = (props: SearchProps) => {
    const { handleChange }  = props;
    return (
        <div>
            <h4>Filter by keywords</h4>
            <FormControl >
                <TextField
                    size="small"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </FormControl>
        </div>
    );
};

export default TypeSearch;
