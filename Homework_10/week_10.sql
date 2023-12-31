PGDMP  &    	            	    {            week_10    16.0    16.0 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16983    week_10    DATABASE     �   CREATE DATABASE week_10 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE week_10;
                postgres    false            �            1259    16984    movies    TABLE     �   CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(150),
    genres character varying(50),
    year character varying(50),
    photo character varying(225)
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    16987    movies_id_seq    SEQUENCE     �   ALTER TABLE public.movies ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.movies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16988    users    TABLE     �   CREATE TABLE public.users (
    id integer,
    email character varying(50),
    gender character varying(50),
    password character varying(50),
    role character varying(50)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    16984    movies 
   TABLE DATA           @   COPY public.movies (id, title, genres, year, photo) FROM stdin;
    public          postgres    false    215   �	       �          0    16988    users 
   TABLE DATA           B   COPY public.users (id, email, gender, password, role) FROM stdin;
    public          postgres    false    217          �           0    0    movies_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movies_id_seq', 1, true);
          public          postgres    false    216            �   [  x��X�v�8]�_��LKs:n��YQ�رl��O��"a
6	�A�1}�%��^�b����� (���圓8��nݺU�6���S�Ӕ|T	��T��mnU�d�I��j�߯�:�~�%et�$�T�<������=��]�Qsf2��TY¥a:����q�,�e2���l�Vet�ѻ�_W�|�EȈ.����&9�Prs>��n
g���z�,���i��'L��3����Ȁܭ8"�D�bz�#?�5����5V,�)�ܵq���]Z��ݲ��dδ��d4�4f�fX�u�=����0cbn�=�#�u��n5.�6�E��a�r-���{��mkcL&�0�d�&E��3����=O�Ң0�o��	���;�"�i�3mrs����5`{����a*;���-���!� ���%��7p9)�`}�'�l�G,�&|%�,���L�0������%z	]�I��ʢUzBO{�z�������P�R��ߗQ�2ژ�����7��9X	���O�b�,ɵaO���8���֨$�n�T�@�	 29�+i���q|���7E�,��%�W"Z�̳��2K�_�L�&ٿ��&w
�R��2�<|�ׂ�r^�X�B�0Y/
���1=�e�xѲ܅��E.͊N�0\e��ށ<q	���I�'T%Լ��L��v��zϓ�V�'�ߢ_9~f���޳8�G=jrŐ�/,d�Y���f�[��]�C2�5`Z�8Tu��)��%�W��e�3&_U��s'y�����n� �O<eS!w��;�&���a}����]2���Q�8�tNg���O�n�ME��W���D+� ���uwө�~C�X�SF_3A_{O�]���� ����o[Q%\O�n�Ԯ���-՘I<�e^\X�ZBM������V�����h�[t\p�B�����A����Y���U�Y�w�>ux���\��J�8z�:���:�_��. B%��:+�m���KY��BN�|{Bw�=�A��5^�d3��"�!�]�IX���,��DI��䳂���\���g�?0"�F%"��Ե�},`Eoڗ����ç��Y��E >�DI�~��@}v,���2��#�{Ѐ�����
,�c�����V�o��9��Nw���B�yE�w��6zC���#K�*�I\yQ�����.�	*���*~�}x���-I�}�@p��IU�Rͻ7l{�����8�v���Õ���!�i֯a�CHRE�9Jws�F�l!�����|zYs[�ҔS�6���ִ�����1���N�I���0dp� ��3re0�𩤍p�����\��Va�(��_m�ق	��W��r��~�:���Ĕ�2��F��rHg뵲�K�Ɛ�^�X�j�ji�'1*I����N������eu��K��1��K�9��*k�4ݜ�O�ic�8Ѱ�*檸��[�{�Ȼ�f�Ra̝sY`2M�y5��oJ�0��GfL&��7%?�x�a��s;[E�0a���4*����-���q�&� �O�G��R}{G��D�avȝ%+zyB*k��`�%еS���։Z�E�[�V�9G�j�p�\=N�,�[y�%����ś�/J����!�J��n���قv�2V�-�s�3Kv��9����c�\Wճ��(B;	^[]!5���8�S7k4�x��+�D�R$.���ק�Q�����5ӛ]�q��������X��A�,C�����&�C��� �mBV�%����q	�\�uu��(����޹���u��]��VK*���E>(̯iAJ0�ھ Sg+���3�Pyv6ŦS��v��=C�c��`�ۺ���Դ�G��4w7�A�ŠUB{�����?�Rw��b��O�̓7�F}Ò?m!��[���,�s�2�MMb��~.ALz��V3�<�k��z���	�c[�T��9�̋<�X�(z�� ̹a�!�v<.R��@\&Q�40f@����5h�8ћ4��Hk�'.� #ǅ�!����F����
d�6&<�Y������/��/_�Q��
�X�WR_�}H�1�vU���1��ɑ�g����Խ�[;Ǐk�~|tt�?6���      �   �
  x�uX[w��}N�����"�����j���e��@D �T��g��Z����1�If��{�HQ!C�-�k*B��_+�!Oi�ѓ;v��W���s���J�\_�(�2��L��ߡ��*~k��݋�@�Br�����s�rn�}�dN�_�M�>��d�n�����U�Ps.�l�j��L*/�׾J�sq���S4H J_Py�A
�&o/Q�G�G�����~8�u��[��啃E��"��z��cJ7�0D����J_u�����	�d���"�̷�+9@/��Í5�� �\�S�=/S%c��5�G%]�߮����F�$qI�!K 4�]k8P�d�Z��U�Bl!�S!�y�l���9@�Y����6��[���4e��1%~"�أ2��<�.q��:>>՞ۈ�bZ� ��
��*)�F�F���b��bw	�f\�[��
z`|r�0�mꑋ;������6�c)�(g�@�R��0Z��EOOOYt1Y�� /�Zc�9��xY�̓ݶ��2D���L�H!�kξ0̶�k����Mk8�]��%�IɓD2�Z���ڏ6����t*�K�ׅ6҄)?�H^f<��~���}z���(��"� �A
#����LvŴ���]c�l%��*hK�J�,R
��?B�d\I!�������c�X��gc���%ͅ�IT���FG�a7��Vv�_l��ϣ�@]�b��%^Foa�ќ.����*%j*~ʕ̔�k-��ݷ��}��m�`@*%I�l3y�Q�^��f��c_}d��=C�2<qh�C�������|P�0a;(5�:�<#���:~���;��K}L�.�B-���H	�zBV�W[&ݻ�[�f.J�����z��Ҵ�
v��˱�CƧiO�q�}2�/?o�0���[>�ڧ=hY�	��yNR#��ݤ���rk���HC�1��kT�o��^�5!`��'ߓRyq���w��vD���fZm�6�ƨ�B��Υ�{ N�7��~��}[��F[� *:O������nx���:�g���Q��W��_/�qo�.�Aq�9`�Dr^�4�7��e^���B� �i��qV��B��II�Μ�����H1&9T��[9K麽�b[=�Љf	�6IK���'�(l�A��mmS�X�q�篋�J���1J� "rp�h�`�j��+���u��v�E�mI���w�r�3�~��c_�U��d���e�l�P��ɱCRH\q�7�b�f�����6
C�y@r��J�8�h����*;��������.�G�����z����A@Ȟ�9�)h��6�|Z'������.J�"��S@�
���ӟѝ����?p�vQ�q�ta�U����xm��A�����a�t �}h���o�[Mv+�v?+��@�B0��"��1#Y�r����|���ʎ3?�
�s00(}�0'~eE<�r�:LW��V��;@-!�8 �]��_���rU�'/JV��r�C�pH�� J�ck�Lj�t�}_O/7��/ ��ph�JE]�����Sw�K��P� A��#=�o��W���]ӫ����C��d������xc���4�8&I��f��-��%{{��� ���%N� �d_�O�����Otz�WL���y�S��ƨ�ȏe��X��c�vΚ�+o�j�������F ��K/?��@�[~�ZX�����1<PR��DAX���|�ZZ�hָ�iU�9xG�0�,6h�G�%-�3�U��H֖�J���]��F?ͭ�o�y�N�J���a�D�j$�#W�fjx��8��B�958'޷.~DX�ѿ���"Bؙ�������-M,�祯7�$ˣ~d��0�I��,��k��T|�Ih	&W��qƿw���^�f�����]i0&^���|d�EV�<�R�q���]����3x	\ �{:~>��v��\.�����G�
�M驞�'
y;������ ,�m��+_�t�[3�"`o���m�
ƖۘP�VJ��-��tw��;i�@�
mۀ��V����zY��ǖ��16]�#�>%t�n ��k�}V���%�3�9r浩�v��|r��mR��|��߇]���ro\�y��Q��!&R�3��=�Qǿݜ���C9,�4�%���}UȼI�ѝ��'2�紻�FZk��6޹8\������/r1ڃ���.�����"�TR~
Rp���:�j�k�R��dW�Aa�uF�h��>���C��'.�G%6#fSb|H��@�j��Z�`o��P�?�vaAg�Ճ��1��+��vm�w;���ĥ�`�W[@�� ?���d���V�]��ٌ����0~5�]�?�O[:��KLIX��mp�*�n�`��v�1�߄��5�E�Q)xb�4 
6���t��������p'�o$v(�w�����<Li2�k{�a�OC��g�G�y��#{���,W{j�o"�Q����Z*ڴ=�՞�%�#�Զ�>ޤ���������J��v�m/E�u\�7O�ß���FPoQ-bvR�z}���5@�:(JT%ğk���p��B���kU�Aa�KcK+�^x���f���j
���d���>���(�7h0�y�(�H?��e�U��(0e@Mم�>�h�r����.������p
�# I���
�ӆ�̧�'z�4~T�`gE"BX�l]�9�L<���f�ۃ� �������7é�     