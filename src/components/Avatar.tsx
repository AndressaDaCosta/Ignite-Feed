import { ImgHTMLAttributes } from "react";

import styles from './Avatar.module.css';



interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
  }

// interface AvatarProps {
// 	hasBorder?: boolean;
// 	src: string;
// 	alt?: string;
//   }
											//rest operator   
  export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			{...props}
			// ... spread operator
		/>
	);
}
