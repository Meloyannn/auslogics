import React from 'react'
import {Input, Button} from 'antd'

const SearchFilterDropdown = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => {
    return (
      <>
        <Input
          autoFocus
          placeholder="Type text here"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
        />
        <Button  onClick={() => {  confirm();  }} type="primary" >
          Search
        </Button>
        <Button
          onClick={() => {
            clearFilters();
          }}  type="danger"
        >
          Reset
        </Button>
      </>
    )}
  
    export default SearchFilterDropdown;