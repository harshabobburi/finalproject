//package com.cognizant.truyum.dao;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.Iterator;
//import java.util.List;
//
//import org.springframework.stereotype.Component;
//
//import com.cognizant.truyum.model.MenuItem;
//import com.cognizant.truyum.model.cartDTO;
//
//@Component
//public class CartDaoCollectionImpl implements CartDao {
//                private static HashMap<String, cartDTO> usercartDTOs = new HashMap<String, cartDTO>();
//
//                public cartDTODaoCollectionImpl() {
//                                if (usercartDTOs.isEmpty()) {
//                                                MenuItemDaoCollectionImpl menuItemDaoCollectionImpl = new MenuItemDaoCollectionImpl();
//                                                List<MenuItem> menuItemList = menuItemDaoCollectionImpl.getMenuItemListCustomer();
//                                                cartDTO cartDTO = new cartDTO(menuItemList, 0.0);
//                                                usercartDTOs.put(null, cartDTO);
//                                }
//                }
//
//                public void addcartDTOItem(String userName, long menuItemId) {
//                                MenuItemDao menuItemDao = new MenuItemDaoCollectionImpl();
//                                ArrayList<MenuItem> menuItemList = new ArrayList<MenuItem>();
//                                menuItemList.add(menuItemDao.getMenuItem(menuItemId));
//                                cartDTO cartDTO;
//                                if (usercartDTOs.containsKey(userName)) {
//                                                cartDTO = usercartDTOs.get(userName);
//                                } else {
//                                                cartDTO = new cartDTO(new ArrayList<MenuItem>(), 0.0);
//                                }
//                                Iterator<MenuItem> itr = cartDTO.getMenuItemList().iterator();
//                                while (itr.hasNext()) {
//                                                menuItemList.add(itr.next());
//                                }
//                                cartDTO.setMenuItemList(menuItemList);
//                                usercartDTOs.put(userName, cartDTO);
//
//                }
//
//                public cartDTO getAllcartDTOItems(String userName){
//                                cartDTO cartDTO = usercartDTOs.get(userName);
//                                double grandTotal = 0.00;
//                                if (cartDTO == null) {
//                                                cartDTO = new cartDTO(new ArrayList<MenuItem>(), 0);
//                                } else if (cartDTO.getMenuItemList().isEmpty()) {
//                                                cartDTO.setMenuItemList(new ArrayList<MenuItem>());
//                                                cartDTO.setTotal(0); 
//                                } else {
//                                                ArrayList<MenuItem> menuItemList = (ArrayList<MenuItem>) cartDTO.getMenuItemList();
//                                                Iterator<MenuItem> itr = menuItemList.iterator();
//                                                while (itr.hasNext()) {
//                                                                MenuItem menuItem = itr.next();
//                                                                grandTotal += menuItem.getPrice();
//                                                }
//                                }
//                                cartDTO.setTotal(grandTotal);
//                                return cartDTO;
//                }
//
//                public void removecartDTOItem(String userName, long menuItemId) {
//                                cartDTO cartDTO = usercartDTOs.get(userName);
//                                ArrayList<MenuItem> menuItemList = (ArrayList<MenuItem>) cartDTO.getMenuItemList();
//                                Iterator<MenuItem> itr = menuItemList.iterator();
//                                while (itr.hasNext()) {
//                                                MenuItem menuItem = itr.next();
//                                                if (menuItem.getId() == menuItemId) {
//                                                                itr.remove();
//                                                                break;
//                                                }
//                                }
//                }
//
//}
