import "./MessageBox.css";
import React, { PropsWithChildren } from "react";

interface MessageBoxPropType extends PropsWithChildren {
  headerTitle: string;
  message: string;
  color?: string;
}

const MessageBox: React.FC<MessageBoxPropType> = ({
  color,
  message,
  headerTitle,
}) => {
  color = color ? color : "is-warning";

  return (
    <div className="my-4">
      <article className={`message ${color}`}>
        <div className="message-header">
          <p>{headerTitle}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{message}</div>
      </article>
    </div>
  );
};

export default MessageBox;
