import type { HTMLAttributes, Ref, ReactNode } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';

// 引入所有的svg的文件

const requireAll = (requireContext: any) => {
	requireContext.keys().map(requireContext);
};
const req: any = (require as any).context('../../assets/svgs', false, /\.svg$/);
requireAll(req);

export type IconProps = {
	/** 图标类型 */
	type: string;
	/**
	 * 默认为 16x16 图标
	 *
	 * 状态图标支持配置为 32x32，包括：`success`、`infowaiting`、`infoblue` 和 `error`
	 *
	 * @default "default"
	 */
	size?: 'default' | 's' | 'l';
	/**
	 * 是否渲染为超链接
	 * @default false
	 */
	link?: boolean;
	/**
	 * 在图标上添加 Tooltip 的快捷方式，详见 [Tooltip](/component/tooltip) 组件
	 */
	tooltip?: ReactNode;
	/**
	 * 在图标上添加 Bubble 的快捷方式，详见 [Bubble](/component/bubble) 组件
	 */
	bubble?: ReactNode;
} & HTMLAttributes<HTMLElement>;
export const Icon = forwardRef((props: IconProps, ref: Ref<HTMLElement>) => {
	// const { classPrefix } = useConfig();
	const { type, size, className, tooltip, bubble, link, ...htmlProps } =
		props;
	const iconName = `#icon-${type}${size === 'l' ? `-${size}` : ''}`;
	const iconClassName = classNames(
		'customize-svgicon',
		`customize-svgicon-${props.type}`,
		'menu-item-icon',
		className,
		{
			'size-s': size === 's',
			'size-l': size === 'l',
			'svg-icon--large': size === 'l',
		},
	);
	const Parent = link ? 'a' : 'i';
	const icon = (
		<Parent ref={ref as any} className={iconClassName} {...htmlProps}>
			<svg aria-hidden="true">
				<use xlinkHref={iconName} />
			</svg>
		</Parent>
	);

	return icon;
});

// export default Icon;
