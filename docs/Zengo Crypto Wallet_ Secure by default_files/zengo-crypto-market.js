(function($){const zengoTable=document.getElementById("zengo-coins");if(!zengoTable){return}
const isMobile=()=>/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);const formatPrice=(value)=>{return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(value)};const formatPercentage=(value)=>{return `${value.toFixed(2)}%`};const formatMarketCap=(value)=>{if(value>=1e9){return `$ ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value / 1e9)} B`}else if(value>=1e6){return `$ ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value / 1e6)} M`}else{return `$ ${new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value)}`}};const usePhpData=()=>{try{const zengoData=pluginData.finalData;const combinedData=zengoData.map(coin=>{const price=typeof coin.price==='string'?parseFloat(coin.price.replace(/[^\d.-]/g,'')):parseFloat(coin.price)||0;const change24=typeof coin.change24==='string'?parseFloat(coin.change24.replace(/[^\d.-]/g,'')):parseFloat(coin.change24)||0;const marketCapValue=typeof coin.marketCap==='string'?parseFloat(coin.marketCap.replace(/[^\d.-]/g,'')):parseFloat(coin.marketCap)||0;console.log(coin.imageUrl);return{asset_code:coin.asset_code,asset_name:coin.asset_name,asset_link:coin.asset_link?coin.asset_link:"",coinlink:coin.asset_link?coin.asset_link:"",network:coin.networkids,price:formatPrice(price),change24:formatPercentage(change24),marketCap:formatMarketCap(marketCapValue),marketCapValue:marketCapValue,imageUrl:coin.imageUrl||""}}).sort((a,b)=>b.marketCapValue-a.marketCapValue);printHtml(combinedData,zengoTable)}catch(error){console.error('An error occurred while using PHP data:',error)}};const printHtml=(tableCoins,htmlElement)=>{if(!tableCoins.length){console.error('No coins to display');return}
const isMobileDevice=isMobile();const date=new Date().toLocaleString();document.querySelector(".user-date").textContent=date;const html=tableCoins.map(coin=>{const checkPositive=parseFloat(coin.change24)>=0?"positive":"negative";const img_url=coin.imageUrl||'';if(isMobile()){return `
                    <tr>
                        <td class="icon-wrap">
                            <img src="${img_url}" /></td>
                        <td class="name">
                            <span class="coin-full-name">
                                ${coin.asset_link ? `<a href="${coin.asset_link}">${coin.asset_name}</a>${coin.asset_code}` : `<span class="coin-name">${coin.asset_name}</span><span>${coin.asset_code}</span>`}
                            </span>
                        </td>
                        <td class="network">
                        <figure class="network-icons">
                            ${coin.network.length > 0 ? coin.network.map(network => `<img src="${pluginData.pluginPath}/icons/${network.toLowerCase()}.svg" alt="${network}"/>`).join('') : "no Info"}              
                        </figure>
                    </td>
                        <td class="price">
                            <span>${coin.price || "no Info"}</span>
                        </td>
                        <td class="change24">
                            <span>${coin.change24 || "no Info"}</span>
                        </td>
                    </tr>
                `}else{return `
                <tr>
                    <td class="icon-wrap">
                        <img src="${img_url}" /></td>
                    <td class="name">
                        <span class="coin-full-name">
                            ${coin.asset_link ? `<a href="${coin.asset_link}">${coin.asset_name}</a>${coin.asset_code}` : `<span class="coin-name">${coin.asset_name}</span><span>${coin.asset_code}</span>`}
                        </span>
                    </td>
                    <td class="network">
                        <figure class="network-icons">
                            ${coin.network.length > 0 ? coin.network.map(network => `<img src="${pluginData.pluginPath}/icons/${network.toLowerCase()}.svg" alt="${network}"/>`).join('') : "no Info"}              
                        </figure>
                    </td>
                    <td class="price">
                        ${coin.price || "no Info"}
                    </td>
                    <td class="change24 ${checkPositive}">
                        ${coin.change24 || "no Info"}
                    </td>
                    <td class="mktcap">
                        ${coin.marketCap || "no Info"}
                    </td>
                </tr>
            `}}).join("");htmlElement.innerHTML=html;const tablesWrap=document.querySelector(".tables-wrap");if(tablesWrap.classList.contains("hide")){tablesWrap.classList.remove("hide");document.querySelector(".lds-circle").style.display="none"}};$(document).ready(function(){const filterTable=(tableId,value)=>{$(`${tableId} tbody tr`).each(function(){const rowText=$(this).find('.coin-full-name, .coin-short-name').text().toLowerCase();$(this).toggle(rowText.includes(value))})};$('#search_zengo, #search_non_zengo').on('keyup',function(){const value=$(this).val().toLowerCase();const minChar=3;if(value.length>=minChar){$(this).closest('table').find('tr:gt(0)').hide().filter(function(){return $(this).find('.coin-full-name, .coin-short-name').text().toLowerCase().includes(value)}).show()}else{$(this).closest('table').find('tr:gt(0)').show()}});$('#search_zengo').on('keyup',function(){const value=$(this).val().toLowerCase();if(value.length>2){filterTable('#zengo-table',value)}else{$('#zengo-table tbody tr').show()}});$('#search_non_zengo').on('keyup',function(){const value=$(this).val().toLowerCase();if(value.length>2){filterTable('.crypto-table',value)}else{$('.crypto-table tbody tr').show()}});usePhpData()})})(jQuery)