"use client";

import React from "react";
import { RecoilRoot } from "recoil";

import { useRecoilState } from "recoil";
import { selectedItemsState } from "../../../recoil/atoms";

import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const models = [
  { key: "gpt 4", value: "GPT 4" },
  { key: "gpt 4o", value: "GPT 4o" },
  { key: "gemini", value: "Gemini" },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemsState);
  const [selectedModel, setSelectedModel] = React.useState("");

  const selectedValue = React.useMemo(
    () => Array.from(selectedItem).join(", ").replaceAll("_", " "),
    [selectedItem]
  );

  const handleSelectionChange = (keys: any) => {
    setSelectedItem(new Set(keys));
  };

  const modelSelect = React.useMemo(
    () => Array.from(selectedModel).join(", ").replaceAll("_", " "),
    [selectedModel]
  );

  const clearSelection = () => {
    setSelectedItem(new Set());
  };

  const handleModelSelectionChange = (keys: any) => {
    setSelectedModel((keys));
  };

  return (
    <RecoilRoot>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full"
        shadow="sm"
      >
        <CardBody>
            <h3>Create Job</h3>
          <div className="flex gap-6 items-end justify-start w-full">
            <div className="flex-1 w-100" style={{ width: "100%" }}>
              <Input
                type="name"
                variant="bordered"
                label=""
                placeholder="Enter Name"
                labelPlacement={"outside"}
              />
            </div>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize flex-initial w-40"
                >
                  {Array.from(selectedModel).join(", ") || "Choose model"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedModel}
                onSelectionChange={handleModelSelectionChange}
                style={{ maxHeight: "200px", overflowY: "scroll" }}
              >
                {models.map((item) => (
                  <DropdownItem key={item.key}>{item.value}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          

            <Button
              className="flex-none w-14"
              variant="bordered"
              onClick={clearSelection}
            >
              Clear
            </Button>
            <Button
              className="flex-none w-auto"
              variant="bordered"
              onClick={clearSelection}
            >
              <i
                className="pi pi-download"
                // style={{ color: "" }}
              ></i>
            </Button>
          </div>
        </CardBody>
      </Card>
    </RecoilRoot>
  );
}
