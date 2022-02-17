import { Checkbox, Menu, Select } from "antd";
import React from "react";
const { SubMenu } = Menu;
const { Option } = Select;
const SideBar = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu title="Make">
        <Menu.ItemGroup key="g1">
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Audi</Checkbox>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu title="Exterior Color">
        <Menu.ItemGroup key="g2">
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu title="interior Color">
        <Menu.ItemGroup key="g2">
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Blue</Checkbox>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu title="Size">
        <Menu.ItemGroup key="g3">
          <Menu.Item>
            <Checkbox>Compact</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Full-size</Checkbox>
          </Menu.Item>
          <Menu.Item>
            <Checkbox>Mid-size</Checkbox>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu title="Price">
        <Menu.ItemGroup key="g4">
          <Menu.Item>
            from :{" "}
            <Select defaultValue="20.000">
              <Option value="20.000">20.000</Option>
              <Option value="30.000">30.000</Option>
              <Option value="40.000">40.000</Option>
              <Option value="50.000">50.000</Option>
              <Option value="260.000">60.000</Option>
            </Select>
            To :{" "}
            <Select defaultValue="20.000">
              <Option value="20.000">20.000</Option>
              <Option value="30.000">30.000</Option>
              <Option value="40.000">40.000</Option>
              <Option value="50.000">50.000</Option>
              <Option value="260.000">60.000</Option>
            </Select>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu title="Year">
        <Menu.ItemGroup key="g4">
          <Menu.Item>
            <Select defaultValue="2022">
              <Option value="2015">2015</Option>
              <Option value="2016">2016</Option>
              <Option value="2017">2017</Option>
              <Option value="2018">2018</Option>
              <Option value="2019">2019</Option>
              <Option value="2020">2020</Option>
              <Option value="2021">2021</Option>
            </Select>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default SideBar;
