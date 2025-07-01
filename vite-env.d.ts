/// <reference types="vite/client" />

declare module "@merc/react-timeline" {
  import { ReactNode } from "react";

  export interface TimelineProps {
    children: ReactNode;
  }

  export interface EventsProps {
    children: ReactNode;
  }

  export interface ImageEventProps {
    date: string;
    text: string;
    src: string;
    alt: string;
    credit?: string;
    children?: ReactNode;
  }

  export interface TextEventProps {
    date: string;
    text: string;
  }

  export interface UrlButtonProps {
    href: string;
    children: ReactNode;
  }

  export interface YouTubeEventProps {
    date: string;
    id: string;
    name: string;
    text: string;
  }

  export const Timeline: React.FC<TimelineProps>;
  export const Events: React.FC<EventsProps>;
  export const ImageEvent: React.FC<ImageEventProps>;
  export const TextEvent: React.FC<TextEventProps>;
  export const UrlButton: React.FC<UrlButtonProps>;
  export const YouTubeEvent: React.FC<YouTubeEventProps>;
}
