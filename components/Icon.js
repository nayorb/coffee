import React from 'react'
import { View, Image } from 'react-native'

const Icon = ({ size, color, style, icon, type }) => {
	return (
		<View>
			<Image
				source={{
					uri: `https://img.icons8.com/${type || 'ios'}/100/${color.replace(
						'#',
						''
					)}/${icon}.png`,
				}}
				style={{ ...style, width: size, height: size }}
			/>
		</View>
	)
}

export default Icon
