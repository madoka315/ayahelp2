import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
 
// 图标
const ayaLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {/* 引用public目录下的favicon.ico */}
    <img src="/favicon.ico" alt="ayaLogo" style={{ width: '32px', height: '32px', marginRight: '10px' }} />
    <span>Aya 帮助文档</span>
  </div>
);

const config: DocsThemeConfig = {
  logo: ayaLogo,
  project: {
    link: 'https://github.com/madoka315/ayahelp2',
  },
  // 社交媒体
  chat: {
    link: 'https://discord.com',
    icon: (
      <img src="/tencent-qq.svg" alt="qq"></img>
    )
  },
  docsRepositoryBase: 'https://github.com/madoka315/ayahelp2',
  // 主题颜色
  primaryHue: 5,
  // 禁用反馈和编辑链接
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  footer: {
    text: 'Aya 帮助文档',
  },
  useNextSeoProps() {
    // 自定义标题
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Aya 帮助文档'
      }
    }
  }
}

export default config
