/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import * as styles from './Section.styles';

export type SectionProps = {
}

export const Section: React.FC = ({ children }) => {
  return <Flex sx={styles.wrapperCss}>{children}</Flex>;
};
