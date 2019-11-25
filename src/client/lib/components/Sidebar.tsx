import * as React from "react";
import styled from "styled-components";

import { ComponentStory } from "entities";

const Container = styled.div`
  background: #f5f5ff;
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  padding: 20px 0;
  border-right: 1px solid #e0e0ff;
  box-sizing: border-box;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 14px;
      padding: 14px 20px;
      position: relative;
      border-left: 4px solid transparent;

      &.active {
        color: #5577ff;
        font-weight: bold;
        border-left-color: #5577ff;
      }
    }
  }
`;

interface SidebarProps {
  current: ComponentStory;
  components: ComponentStory[];
}

export const Sidebar = ({ current, components }: SidebarProps) => {
  return (
    <Container>
      <ul>
        {components.map(story => (
          <li key={story.title} className={current.title === story.title ? "active" : ""}>
            {story.title}
          </li>
        ))}
      </ul>
    </Container>
  );
};
