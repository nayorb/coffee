import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const ClickableIcon = ({ size, color, style, onClick, icon, type }) => {
	return (
		<TouchableOpacity onPress={onClick}>
			<Image
				source={{
					uri: `https://img.icons8.com/${type || 'ios'}/100/${color.replace(
						'#',
						''
					)}/${icon}.png`,
				}}
				style={{ ...style, width: size, height: size }}
			/>
		</TouchableOpacity>
	)
}

export default ClickableIcon
