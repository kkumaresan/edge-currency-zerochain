/* global */
// @flow

import type { EdgeCurrencyInfo } from 'edge-core-js'
import type { EthereumSettings } from './ethTypes'

const otherSettings:EthereumSettings = {
  etherscanApiServers: [
    'https://api.etherscan.io'
  ],
  blockcypherApiServers: [
    'https://api.blockcypher.com'
  ],
  superethServers: [
    'https://supereth1.edgesecure.co:8443'
  ],
  iosAllowedTokens: { 'REP': true, 'WINGS': true, 'HUR': true, 'IND': true }
}

const defaultSettings:any = {
  customFeeSettings: ['gasLimit', 'gasPrice'],
  otherSettings
}

export const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'ZCN',
  currencyName: '0Chain',
  pluginName: '0chain',
  walletTypes: [
    'wallet:ethereum'
  ],

  defaultSettings,

  addressExplorer: 'https://etherscan.io/address/%s',
  transactionExplorer: 'https://etherscan.io/tx/%s',

  denominations: [
    // An array of Objects of the possible denominations for this currency
    {
      name: 'ACN',
      multiplier: '1000000000000000000',
      symbol: 'Ξ'
    },
    {
      name: 'mZCN',
      multiplier: '1000000000000000',
      symbol: 'mΞ'
    }
  ],
  symbolImage: 'data:image/png;base64,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', // Base64 encoded png image of the currency symbol (optional)
  symbolImageDarkMono: 'data:image/png;base64,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', // Base64 encoded png image of the currency symbol (optional)
  metaTokens: [
    // Array of objects describing the supported metatokens
    {
      currencyCode: 'REP',
      currencyName: 'Augur',
      denominations: [
        {
          name: 'REP',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
      symbolImage: 'data:image/png;base64,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'
    },
    {
      currencyCode: 'WINGS',
      currencyName: 'Wings',
      denominations: [
        {
          name: 'WINGS',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
      symbolImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAABQlJREFUaAXtmluIVlUUx/2mplSsJLFyLJ3UefCS0YhiIdJE0IgJiYLoS/bik1qgZj5Y0EMPUYIgBGFCPSgRDRWERBEGEkaKCN7wgoKaeXe85CV1+v1lH9mdOec7+5zv7PN5PmbBn7Mva629/vt29rn069cnfT3QUD1Q6enpeQZGr4IO8BC4aNAduqo8KLtYqVSuki+dVIKIIf4A6elgLpgNhoFqcotKdcC9TohJx9VfotNuV2vAR909wrZzyDeRfwmI/BzwNPAhl3Ea7pDVdMROH405+YS8pv1U8Ak4AnxLl1NgGZUiR7iaL9hOoj4Y+bZquhnr7mA3nlHen9HenxnkJ4IPwV6Qp2zwF3VOnmE7DqwGu3JgfhMfvvaNnBhbbgi2DawC20FWWWO5LE8Sts+C5WAbuANc5QqKj9fCFPuxtdjXbEsAc13ZGr0PsjaK/WJwAfS3ffTapVEYgoJ6phncANfjruyk/1LnLPh+FOXzQIccFzmH0gja+cdFOdChnVWkPzL5BdhvCup6EVYFBjp46JajW9ALQIFGSQ+FsR1CXVSHraP8uShnMWXvEPDamLpexcT+MYUrrIqfsO8M8pGEg0pdDfkxJNuByA8GtchkjOXHVY6hOJqgq84mE+dn6C4KOdbxVbPkL5UnEraNcSr9USAY+SybSgv2r9t+HdILCfjLOD3iepC6r8D8GJ2V2Gvk0xG2nRnyrZSJvEZfa99FtH4XAtd1LJ/7gE5fWkL/E+LQpvQNqNaJe7EdL8NUIyyDOKHhkdQF5IfG6ZnymVyHJ+iEq2cT9Hd2IW0OIv8D6LDLY9KTsd+eG2G7EQLRM3ZA/km7zqS1hrWW08gfBDw1MKANLafNYEpQlnBdh/0SL4TthglMI/kKmGaVP0H6DSvvmuwg6C34fAqDn8EEV0P0dItr0e3HqxDgCRrQtLPlDJmbdoFj+j3ItqK7FSSR1e1Px1O1L9EeM9M7YbUE6W4up5U2os3nZJBJcX0N3W1gtIPNPtpdht4IoDX+OZil7bwoOUhDmsqBqOe10aWVqD0h1gek9Xy9RWB2NBUywiYaEbbl7kHALvCdFvl6EtaZ+ppvkmH/hRGmd8/S+IVQAIWPcmGEDdHwtA520FA/+MvWm3DDj/CB0NhdIn8lVOY1W+gIs47/jiBY6LQulLAZurqu4/uBsEbdh0QeXetNWM/E9kNFHsR342QOy2d9lLN6ED5OIDpwNIMZQGfdPEQb4gLwPGS78nCYmw/OtCvBKZCH6CvFF6DI5wL3viCwYeAoqFVu4WAjGODeesGaBNcKDoFa5DbGXeCxgsNP1xwBjgXHQVYR0c0g6X1ZusB8aBNkOzgDsoi+R/0KhvuILXefBDoNdIO0IqK/g1G5B+XLIcF2gqsgjYjoDjDOV1xe/BKwvhTeAK6i28v3QK93yyUE/RbQbcNFpLcBtJaLpYmWwN8GmpZJol1X99G2UhJV0AT/fhJL6tUZ34K733rKTPZTB7I/otNeWpJmVJsgsT6B7C/Uv1hqooZsM0S+rkJ2K3Uvl56oITsAMpqiUfInhZ0NQdSQfQRCv0Uw1U9pWb4K3r99A6EhQCNoy34y84D3z6+F9gyEWsAeEMhhEm+CNL8vFBpz5sYgpT/qRFByDCwCek3TeAIx/Th6ApwES8HDjcfSMILcJKA1+i4YWHaiVV98QXAiBPUaVX/AXC472cT4Idy4UzeRfZ9COXvgP5RIs+wwWppJAAAAAElFTkSuQmCC'
    },
    {
      currencyCode: 'IND',
      currencyName: 'Indorse',
      denominations: [
        {
          name: 'IND',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0xf8e386EDa857484f5a12e4B5DAa9984E06E73705',
      symbolImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWZhMGJmZS02ZTJlLTRjMzktYTRkZi1lODUxODg0NDMwNGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzE0QjlBN0EzNUY4MTFFOEEyQTFCMzI3NTQ2MkM1QjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzE0QjlBNzkzNUY4MTFFOEEyQTFCMzI3NTQ2MkM1QjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzE1ZTdkNjgtODI5Mi00NGEwLWEwM2MtYTBjYzM1ZDRkYWI3IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YjQ5ZWNiMDItN2RmYy03NDRkLTlhODAtYTNlNDg1YTI1NTExIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IbSVSgAAAwBQTFRFAAAA/////f7//P7/+P3/9/3/+/7/9v3/9f3/+v7/+f7/+P7/9/3+9/7/9v3+9v7/9///9v7++P//9/7++f//+P7++v//+f7++////P///f///P7++/39/v///f7+/P39/f/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWVOasgAAACJ0Uk5T////////////////////////////////////////////AA3Qw3EAAAIlSURBVHjavJftlpsgEIaduomNZMQa28pYtsn932RnwE3WBISQs+WXh3Me5xPmpbq8sKqvg0dTDvcAthRGULRJb8AKUJEFKoB3BIjK0JbtKhruL0SNNTEN5jm4Z7N40qo+s20bM17FUoXYnTQammeKul6FWXRLn9guxekAPBhhO4cbEjxGV4EKTVcWjRXDznagZlXMZcE1E7NDSdJmUvBnlr8JGHunxXVKwNAiHj0+gL5cmHBRG7Y/QQq2B9VpwS3sZEOCJfnBvsUpBYM1LeqOXV52PF0fOBCbtFzTef/zxjqcJtU0xyHpNnA7nwnaz5uTy6Lu07BP7GrzDVzZM2DzCA+wpD8TXpW0yYZ9N/0ph8nXeJ2wTNi0a5jgoHRWwriXVHMPk1G6yakzNxg+wJYOGZaJUdw9wLz2Y7I9h0ZyE4K5BkkYX4Cd21jotktYKOachFkbK1WXdyTNb/h+1ySY1yQynr7dt6f+X6eqXsPDU/B7KRy4SfLdrh08rrOtZYJk1Nn10uPVK5PAllz6HAn3XdfnjJvGVdX4Wls3KY1cL+lxM14HHUJ/PVDuUCUHHX6oAv7DEVR9YzNG7G1A/xDbkr95GdHp4S4dMSr8WEYGlzcbUGMBQfMGdkG1ugkayJVSaglco+R5DoW7IeJ6TzsRR1F2Uz46eEt8VlG9PHm3hf37rGTuebp1YnlDcKfEOhWJda99TekzQejyB8prT6MvfdH9E2AAgQyK4pOK+i4AAAAASUVORK5CYII='
    },
    {
      currencyCode: 'HUR',
      currencyName: 'Hurify',
      denominations: [
        {
          name: 'HUR',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0xCDB7eCFd3403Eef3882c65B761ef9B5054890a47',
      symbolImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAMAAABnwz74AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEOEJCMEZFMzVFQjExRTg4NzcyRTY4NjlDRTkxOUY2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEOEJCMEZEMzVFQjExRTg4NzcyRTY4NjlDRTkxOUY2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIyLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmNmYWYwOTctN2JmZi1kNDQ4LWFhNmQtMDY1NWE3OTY1MTJjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MTgzMTIxY2UtMzUwYS05YTQzLTlkYjYtYzNmMzM4NTllOWUyIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+V2hpdGUgYW5kIEJsYWNrIEhVUjwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RK0N+gAAAddQTFRFAQEB6urq8/Pz8vLy+vr6Z2dnQUFB+/v7oKCgn5+faGhot7e3a2trwMDAoaGhDAwMGRkZqqqqhYWFwcHBTk5Onp6ez8/PMDAwubm5v7+/6+vrVFRUPz8/bm5uU1NTnZ2dZmZmoqKiVVVVVlZWuLi4AgICCAgITU1NISEh7+/v9PT0BwcHq6urpqam5OTk39/fRkZGQ0ND8fHxBgYGxMTElJSU4eHh9fX1aWlpUVFRCwsLfHx84uLi4+PjwsLCgICAEBAQf39/w8PDYmJiampqExMTyMjIy8vLKSkpCgoKSEhIgoKC0NDQHh4ee3t7Dg4OFxcXm5ub9vb2urq6zc3NZWVl5ubmmJiYTExMx8fHysrKUlJSfX19QkJCj4+P9/f3W1tbu7u729vbR0dHOzs7vr6+jo6O/Pz8bW1tDw8PJCQkqampsrKy7Ozsenp6kZGRycnJMzMzCQkJ+Pj42NjYLi4uIyMjHx8f3t7e7u7uREREGhoas7OzhoaGk5OTmZmZ+fn5rKysl5eXb29v5eXlpaWld3d3SkpKvLy82traEhISJiYm/v7+PDw8fn5+tra2OTk5YGBgHBwcFhYWcHBwNzc37e3tWVlZT09Pr6+vAAAA////////zkE0swAAAJ10Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AMv8vEwAAALvSURBVHjanJf3XxoxFMAfFgqIo1ZQwaJSKoha99aqdVa799577z3s3nv3Hn9sk+OOW0nI8X7I4xPu+71LLpcBWUHMv/Vk9ldnhQGC/47HkIS/f75Iwc5lmAtfoihBnc4jNlUUIajrQZQxQOH7iw0gxQsMIMfzDUzBGidP3kVAWsDkeQaQen6BAeR5tgFc8MQQLCgQ8iwDSPWfwADueMTSoEAgwTsM4Ja3G0yCkBxPDBGmIFSCsuGLMAQueIsBiuHNBjDxo13hdPoeYl9XOPxgCb+9CS/+JNVXTob3JY+2d4dp/J3e/tvSD2C6/3KFRA1iFc1luIKUtaR6FcmVJSsVPR5OqYZGk0B7fkmB0nLfZABT+wsLAFTDWjQMYOq/woLHe5I0HULDANkv+f5XBdHBp41cQRCv0rQFDQNkOtEiOD87W8kVpF/TSqVRAz4eDmZhHVoFegg68f2YTlxKTcGYa0FbIk8MpIZhwCZILYy0GYLbpPqTIWijb2HGIDp77zqaEIplnucE30m5uRXPbiB56w5VMHGHFBda80S70gI9t6wC/TUOYS1N/a0JdezgRpqqXhjDgMTNX0o9ZE97mIJSHFKHzkgzTcdwQhXM0bJbu96fVFJ9ZCBFYyyBDzfdyPfbwi5cT3MF0vbAAZ1XAupQ1g02AT6b1PgfjzAnCOIoTdM6H9E+pmiuFU9K4+fiHYg1vni86SKpeHmm4ev1U3/2Xia/Q7tJ5RyeKIvHZz7787z2OUc96DJ0Xp9Q3Br8qzU+P6WVe4rjjUnVjYHwEHRM6/IGM29eWGT7wcJblrbymCwf4CyuMgavlbct74X7wVtv5e0bjELP4Lfzji2O2OC4P2OTJWoFg2ds8/gGFs/aaFZ7XPDMrS7bQPkKyc02y+BtYPKc7b7TwON5Bw67gctzjzxWA5/nH7rMBsI3J1wf+wyDiBcdPHWDkBcefcc7KD84LOKFguy7f9HxIx+U3ldFHr7ph7E4ue3gNdEV/wUYAJPuhYAeVC8CAAAAAElFTkSuQmCC'
    }
  ]
}
